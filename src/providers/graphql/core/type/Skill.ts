/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Skill
// ====================================================

export interface Skill_getSkillById_profiles_user {
  __typename: "User";
  username: string;
}

export interface Skill_getSkillById_profiles {
  __typename: "Profile";
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
  user: Skill_getSkillById_profiles_user;
}

export interface Skill_getSkillById {
  __typename: "Skill";
  id: number;
  /**
   * Skill name
   */
  name: string;
  /**
   * Skill icon paths
   */
  icon: string[] | null;
  /**
   * Profiles asociated to Skill
   */
  profiles: Skill_getSkillById_profiles[] | null;
}

export interface Skill {
  getSkillById: Skill_getSkillById | null;
}

export interface SkillVariables {
  skillId: number;
}
