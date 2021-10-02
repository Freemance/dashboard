/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddSkill
// ====================================================

export interface AddSkill_createSkill {
  __typename: "Skill";
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  id: number;
  /**
   * Skill name
   */
  name: string;
  /**
   * Skill icon paths
   */
  icon: string[] | null;
}

export interface AddSkill {
  createSkill: AddSkill_createSkill | null;
}

export interface AddSkillVariables {
  skillName: string;
  icon?: string[] | null;
}
