/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  OrderDirection,
  TagOrderField,
} from './../../../../../type/globalTypes';

// ====================================================
// GraphQL query operation: Tags
// ====================================================

export interface Tag {
  __typename: 'Tag';
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

export interface TagEdge {
  __typename: 'TagEdge';
  cursor: number;
  node: Tag;
}

export interface TagConnection {
  __typename: 'TagConnection';
  totalCount: number;
  edges: TagEdge[] | null;
}

export interface Tags {
  filterTags: TagConnection;
}

export interface TagsVariables {
  first: number;
  direction: OrderDirection;
  field: TagOrderField;
}
