import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    loginDashboard(data: { email: $email, password: $password }) {
      accessToken
      refreshToken
      user {
        username
        role
      }
    }
  }
`;

export const GET_REFRESH_TOKEN = gql`
  mutation RefreshToken($token: String!) {
    refreshToken(token: $token) {
      accessToken
      refreshToken
    }
  }
`;
