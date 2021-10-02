/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTag
// ====================================================

export interface CreateTag_createTag {
  __typename: "Tag";
  id: number;
  /**
   * Tag name
   */
  name: string;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt: any;
}

export interface CreateTag {
  createTag: CreateTag_createTag | null;
}

export interface CreateTagVariables {
  tagName: string;
}
