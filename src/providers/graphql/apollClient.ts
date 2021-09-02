import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
} from '@apollo/client';

const Client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri:
    process.env.REACT_APP_API_HOST ||
    'https://freemance-backend.herokuapp.com/graphql',
});

export default Client;
