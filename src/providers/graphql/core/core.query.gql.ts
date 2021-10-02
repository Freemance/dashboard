import { gql } from '@apollo/client';

export const GET_INITIAL_DATA = gql`
  query GetInitialData {
    me {
      username
      email
      role
    }
    uptime
    getUsersStatistics {
      totalUsers
      usersApproved
      usersPending
    }
  }
`;

export const GET_SKILLS = gql`
  query Skills(
    $first: Int!
    $direction: OrderDirection!
    $filterField: SkillOrderField!
  ) {
    filterSkills(
      first: $first
      orderBy: { direction: $direction, field: $filterField }
    ) {
      totalCount
      edges {
        node {
          icon
          id
          name
          profiles {
            id
            avatar
            firstName
            lastName
            user {
              username
            }
          }
        }
      }
    }
  }
`;

export const GET_SKILL = gql`
  query Skill($skillId: Int!) {
    getSkillById(id: $skillId) {
      id
      name
      icon
      profiles {
        id
        avatar
        firstName
        lastName
        user {
          username
        }
      }
    }
  }
`;

export const GET_TAGS = gql`
  query Tags(
    $first: Int!
    $direction: OrderDirection!
    $field: TagOrderField!
  ) {
    filterTags(
      first: $first
      orderBy: { direction: $direction, field: $field }
    ) {
      totalCount
      edges {
        cursor
        node {
          id
          name
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const GET_TAG = gql`
  query Tag($tagId: Int!) {
    tag(id: $tagId) {
      id
      name
      updatedAt
      createdAt
    }
  }
`;
