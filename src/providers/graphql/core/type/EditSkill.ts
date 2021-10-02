/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditSkill
// ====================================================

export interface EditSkill_updateSkill_profiles_user {
  __typename: "User";
  username: string;
}

export interface EditSkill_updateSkill_profiles {
  __typename: "Profile";
  /**
   * User associated  to the profile
   */
  user: EditSkill_updateSkill_profiles_user;
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
}

export interface EditSkill_updateSkill {
  __typename: "Skill";
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt: any;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * Skill icon paths
   */
  icon: string[] | null;
  /**
   * Skill name
   */
  name: string;
  /**
   * Profiles asociated to Skill
   */
  profiles: EditSkill_updateSkill_profiles[] | null;
}

export interface EditSkill {
  updateSkill: EditSkill_updateSkill | null;
}

export interface EditSkillVariables {
  skillId: number;
  icon?: string[] | null;
  skillName?: string | null;
}
