/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Tag
// ====================================================

export interface Tag_tag {
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

export interface Tag {
  tag: Tag_tag | null;
}

export interface TagVariables {
  tagId: number;
}
