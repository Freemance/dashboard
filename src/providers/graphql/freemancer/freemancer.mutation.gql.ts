import { gql } from '@apollo/client';

export const UPDATE_STATUS = gql`
  mutation changeStatus($profileId: Int!, $newStatus: ProfileStatus) {
    profileUpdateStatus(profileId: $profileId, status: $newStatus) {
      id
      profileStatus
    }
  }
`;

export const UPDATE_ACTIVE_STATUS = gql`
  mutation updateActiveStatus($id: Int!, $active: Boolean!) {
    updateActiveStatus(id: $id, active: $active) {
      id
      active
    }
  }
`;
