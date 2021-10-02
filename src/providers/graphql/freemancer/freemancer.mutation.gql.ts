import { gql } from '@apollo/client';

export const UPDATE_STATUS = gql`
  mutation changeStatus($profileId: Int!, $newStatus: ProfileStatus) {
    profileUpdateStatus(profileId: $profileId, status: $newStatus) {
      id
      profileStatus
    }
  }
`;
