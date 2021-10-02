import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
  ServerError,
} from '@apollo/client';
import { ErrorResponse, onError } from '@apollo/client/link/error';
import { LocalStorage } from 'src/services/LocalStorage/LocalStorage.service';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_HOST || 'https://api.freemance.com/graphql/', // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
});

const errorLink = onError(
  ({ graphQLErrors, networkError, response }: ErrorResponse) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
      if (networkError && (networkError as ServerError).statusCode === 401) {
        LocalStorage.remove('auth-token');
        LocalStorage.remove('refresh-token');
        console.log('Permisos Insuficientes');
        window.location.reload();
      }
    }

    if (response) {
      console.log(response);
    }
  }
);

const authLink = new ApolloLink((operation, forward) => {
  const authToken = LocalStorage.get('auth-token');

  if (authToken) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
  }
  return forward(operation);
});

const Client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(), 
});

export default Client;
