/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTag
// ====================================================

export interface UpdateTag_updateTag {
  __typename: "Tag";
  id: number;
  /**
   * Tag name
   */
  name: string;
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt: any;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
}

export interface UpdateTag {
  updateTag: UpdateTag_updateTag | null;
}

export interface UpdateTagVariables {
  tagId: number;
  tagName?: string | null;
}
