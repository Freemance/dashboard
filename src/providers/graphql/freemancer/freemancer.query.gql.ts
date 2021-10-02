import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Users(
    $first: Int
    $direction: OrderDirection!
    $filterField: UserOrderField!
  ) {
    filterUsers(
      first: $first
      orderBy: { direction: $direction, field: $filterField }
    ) {
      totalCount
      edges {
        node {
          id
          active
          email
          username
          role
          createdAt
          profile {
            avatar
            firstName
            lastName
            profileStatus
            slykUser
          }
        }
      }
    }
  }
`;

export const GET_PROFILES = gql`
  query Profiles(
    $first: Int!
    $direction: OrderDirection!
    $sortField: ProfileOrderField!
    $status: ProfileStatus
    $query: String
  ) {
    profileFilterForAdmin(
      first: $first
      query: $query
      profileStatus: $status
      orderBy: { direction: $direction, field: $sortField }
    ) {
      totalCount
      edges {
        cursor
        node {
          id
          avatar
          firstName
          lastName
          slykUser
          profileStatus
          updatedAt
          createdAt
          user {
            id
            active
            email
            username
            role
            updatedAt
            createdAt
          }
        }
      }
    }
  }
`;
