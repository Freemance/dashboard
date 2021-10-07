import { default as jwtDecode, JwtPayload } from 'jwt-decode';

/**
 *
 * Check to see if the JWT is expired
 */
export const isJwtExpired = async (token: string) => {
  if (typeof token !== 'string' || !token)
    throw new Error('Invalid token provided');

  let isJwtExpired = false;

  const decodedToken: JwtPayload = await jwtDecode(token);

  if (!decodedToken) return false;

  const currentTime = new Date().getTime() / 1000;
  if (currentTime > decodedToken.exp) isJwtExpired = true;

  return isJwtExpired;
};
