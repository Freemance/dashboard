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
