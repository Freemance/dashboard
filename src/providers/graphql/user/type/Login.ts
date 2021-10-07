/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface LoginUser {
  __typename: 'User';
  username: string;
  role: string;
}

export interface LoginDashboard {
  __typename: 'Auth';
  /**
   * JWT access token
   */
  accessToken: string;
  /**
   * JWT refresh token
   */
  refreshToken: string;
  /**
   * user access
   */
  user: LoginUser;
}

export interface Login {
  loginDashboard: LoginDashboard;
}

export interface LoginVariables {
  email: string;
  password: string;
}

export interface RefreshVariables {
  token: string;
}

export interface RefreshResponse {
  refreshToken: {
    accessToken: string;
    refreshToken: string;
  };
}
