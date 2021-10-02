import { gql } from '@apollo/client';

export const ADD_SKILL = gql`
  mutation AddSkill($skillName: String!, $icon: [String!]) {
    createSkill(input: { icon: $icon, name: $skillName }) {
      createdAt
      id
      name
      icon
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation RemoveSkill($skillId: Int!) {
    deleteSkill(id: $skillId)
  }
`;

export const EDIT_SKILL = gql`
  mutation EditSkill($skillId: Int!, $icon: [String!], $skillName: String) {
    updateSkill(id: $skillId, input: { icon: $icon, name: $skillName }) {
      updatedAt
      createdAt
      icon
      name
      profiles {
        user {
          username
        }
        firstName
        lastName
        slykUser
      }
    }
  }
`;

export const ADD_TAG = gql`
  mutation CreateTag($tagName: String!) {
    createTag(input: { name: $tagName }) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const EDIT_TAG = gql`
  mutation UpdateTag($tagId: Int!, $tagName: String) {
    updateTag(id: $tagId, input: { name: $tagName }) {
      id
      name
      updatedAt
      createdAt
    }
  }
`;

export const DELETE_TAG = gql`
  mutation DeleteTag($tagId: Int!) {
    deleteTag(id: $tagId)
  }
`;
