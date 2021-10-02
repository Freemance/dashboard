/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  OrderDirection,
  SkillOrderField,
} from './../../../../../type/globalTypes';

// ====================================================
// GraphQL query operation: Skills
// ====================================================

export interface SkillNodeUser {
  __typename: 'User';
  username: string;
}

export interface SkillNodeProfile {
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
   * User associated  to the profile
   */
  user: SkillNodeUser;
}

export interface SkillNode {
  __typename: 'Skill';
  /**
   * Skill icon paths
   */
  icon: string[] | null;
  id: number;
  /**
   * Skill name
   */
  name: string;
  /**
   * Profiles asociated to Skill
   */
  profiles: SkillNodeProfile[] | null;
}

export interface SkillEdge {
  __typename: 'SkillEdge';
  node: SkillNode;
}

export interface SkillConnection {
  __typename: 'SkillConnection';
  totalCount: number;
  edges: SkillEdge[] | null;
}

export interface Skills {
  filterSkills: SkillConnection;
}

export interface SkillsVariables {
  first: number;
  direction: OrderDirection;
  filterField: SkillOrderField;
}
