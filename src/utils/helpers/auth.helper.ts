import { LocalStorage } from 'src/services/LocalStorage/LocalStorage.service';
import { LoginDashboard } from 'src/providers/graphql/user/type/Login';

export const _saveUserData = (data: LoginDashboard): void => {
  console.info(data);
  LocalStorage.set('auth-token', data.accessToken);
  LocalStorage.set('role', data.user.role);
  LocalStorage.set('refresh-token', data.refreshToken);
};

export const isAuthenticated = (): boolean => {
  const token = LocalStorage.get('auth-token');
  return token ? true : false;
};
