/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  OrderDirection,
  UserOrderField,
  ProfileStatus,
  UserRoleType,
} from 'type/globalTypes';

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Profile {
  __typename: 'Profile';
  /**
   * Avatar name
   */
  avatar: string | null;
  /**
   * First name
   */
  firstName: string;
  /**
   * Last name
   */
  lastName: string;
  /**
   * Profile Status
   */
  profileStatus: ProfileStatus;
  /**
   * Slyk Username
   */
  slykUser: string;
}

export interface User {
  __typename: 'User';
  id: number;
  active: boolean;
  email: string;
  username: string;
  role: UserRoleType;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * user profile
   */
  profile: Profile | null;
}

export interface UserEdge {
  __typename: 'UserEdge';
  node: User;
}

export interface UserConnection {
  __typename: 'UserConnection';
  totalCount: number;
  edges: UserEdge[] | null;
}

export interface Users {
  filterUsers: UserEdge;
}

export interface UsersVariables {
  first?: number | null;
  direction: OrderDirection;
  filterField: UserOrderField;
}
