/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  OrderDirection,
  ProfileOrderField,
  ProfileStatus,
  UserRoleType,
} from 'type/globalTypes';

// ====================================================
// GraphQL query operation: Profiles
// ====================================================

export interface User {
  __typename: 'User';
  id: number;
  active: boolean;
  email: string;
  username: string;
  role: UserRoleType;
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt: any;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
}

export interface Profile {
  __typename: 'Profile';
  id: number;
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
   * Slyk Username
   */
  slykUser: string;
  /**
   * Profile Status
   */
  profileStatus: ProfileStatus;
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt: any;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * User associated  to the profile
   */
  user: User;
}

export interface ProfileEdge {
  __typename: 'ProfileEdge';
  cursor: number;
  node: Profile;
}

export interface ProfileConnection {
  __typename: 'ProfileConnection';
  totalCount: number;
  edges: ProfileEdge[] | null;
}

export interface Profiles {
  profileFilterForAdmin: ProfileConnection | null;
}

export interface ProfilesVariables {
  first: number;
  direction: OrderDirection;
  sortField: ProfileOrderField;
}
