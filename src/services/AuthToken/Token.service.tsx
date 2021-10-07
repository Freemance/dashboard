// import { RefreshResponse } from 'src/providers/graphql/user/type/Login';
import { useHistory } from 'react-router-dom';
import { GET_REFRESH_TOKEN } from 'src/providers/graphql/user/user.mutation.gql';
import { LocalStorage } from '../LocalStorage/LocalStorage.service';

export const getTokens = () => {
  const accessToken = LocalStorage.get('auth-token');
  const refreshToken = LocalStorage.get('refresh-token');

  return {
    accessToken,
    refreshToken,
  };
};

export const onRefreshComplete = (data: any) => {
  // Find and return the access token and refresh token from the provided fetch callback
  const newAccessToken = data?.data?.refreshToken?.accessToken;
  const newRefreshToken = data?.data?.refreshToken?.refreshToken;

  const history = useHistory();

  // Handle sign out logic if the refresh token attempt failed
  if (!newAccessToken || !newRefreshToken) {
    console.log(
      'Redirect back to login, because the refresh token was expired!'
    );
    LocalStorage.remove('auth-token');
    LocalStorage.remove('refresh-token');
    LocalStorage.remove('role');
    history.push('/login');
    return;
  }

  // Update tokens in AsyncStorage
  LocalStorage.set('auth-token', newAccessToken);
  LocalStorage.set('refresh-token', newRefreshToken);

  // Return the tokens back to the lib to cache for later use
  return {
    newAccessToken,
    newRefreshToken,
  };
};

/**
 * Configure the body of the token refresh method
 */
export const fetchBody = () => ({
  query: GET_REFRESH_TOKEN,
  variables: {
    token: LocalStorage.get('refresh-token'),
  },
});
