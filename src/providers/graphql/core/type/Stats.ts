/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Stats
// ====================================================

export interface StatsUsersStatistics {
  __typename: 'UsersStatistics';
  totalUsers: number;
  usersApproved: number;
  usersPending: number;
}

export interface Stats {
  uptime: number;
  getUsersStatistics: StatsUsersStatistics | null;
}
