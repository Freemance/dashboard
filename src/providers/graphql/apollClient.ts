import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
  // ServerError,
  Observable,
} from '@apollo/client';
// import { ErrorResponse, onError } from '@apollo/client/link/error';
import { apolloLinkJWT } from 'src/services/apollo-link-jwt';
import { LocalStorage } from 'src/services/LocalStorage/LocalStorage.service';
// import { RefreshResponse } from './user/type/Login';
import {
  getTokens,
  fetchBody,
  onRefreshComplete,
} from 'src/services/AuthToken/Token.service';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_HOST || 'https://api.freemance.com/graphql/', // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
});

/* const errorLink = onError(
  ({ graphQLErrors, networkError, response }: ErrorResponse) => {
    if (graphQLErrors) {
      if (graphQLErrors[0].message === 'Unauthorized') {
        LocalStorage.remove('auth-token');
        LocalStorage.remove('refresh-token');
        console.log('Permisos Insuficientes');
        window.location.reload();
      }
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }
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
); */

const authLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any;
      Promise.resolve(operation)
        .then((operation) => {
          const authToken = LocalStorage.get('auth-token');
          if (authToken) {
            operation.setContext({
              headers: {
                authorization: `bearer ${authToken}`,
              },
            });
          } // accessToken is defined
        }) // then operation ends here
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          }); // handle ends here
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const jwtLink = apolloLinkJWT({
  apiUrl:
    process.env.REACT_APP_API_HOST || 'https://api.freemance.com/graphql/',
  getTokens,
  fetchBody,
  onRefreshComplete,
  debugMode: true,
});

const Client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: ApolloLink.from([jwtLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default Client;
