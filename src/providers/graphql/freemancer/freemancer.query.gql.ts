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

export const GET_PROFILE_BY_ID = gql`
  query ProfilesByUsername($profileId: Int!) {
    profileById(id: $profileId) {
      id
      avatar
      firstName
      lastName
      jobTitle
      slykUser
      createdAt
      bio
      tag {
        name
      }
      dateOfBirth
      profileStatus
      address
      city
      country
      postalCode
      skills {
        id
        icon
        name
      }
      courses {
        course
        description
        startDate
        endDate
        institution
      }
      phone
      employmentHistory {
        company
        description
        name
        startDate
        endDate
        inProgress
      }
      languages {
        language
        lvl
      }
      portfolioItem {
        proyect
        description
        screenshts
        startDate
        endDate
        link
        skills {
          name
          icon
        }
      }
    }
  }
`;
