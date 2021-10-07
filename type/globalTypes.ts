/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Possible directions in which to order a list of items when provided an `orderBy` argument.
 */
export enum OrderDirection {
  asc = 'asc',
  desc = 'desc',
}

/**
 * Properties by which users connections can be ordered.
 */
export enum ProfileOrderField {
  address = 'address',
  bio = 'bio',
  city = 'city',
  country = 'country',
  createdAt = 'createdAt',
  firstName = 'firstName',
  id = 'id',
  jobTitle = 'jobTitle',
  lastName = 'lastName',
  phone = 'phone',
  placeOfBirth = 'placeOfBirth',
  postalCode = 'postalCode',
  slykUser = 'slykUser',
  updatedAt = 'updatedAt',
}

/**
 * Profile Status
 */
export enum ProfileStatusOptions {
  APPROVED = 'APPROVED',
  DISAPPROVED = 'DISAPPROVED',
  NEEDFIX = 'NEEDFIX',
  PENDING = 'PENDING',
  REVIEWING = 'REVIEWING',
}

export type LANLVL =
  | 'A1'
  | 'A2'
  | 'B1'
  | 'B2'
  | 'C1'
  | 'C2'
  | 'GOOD_WORKING_KNOWLEDGE'
  | 'HIGHLY_PROFICIENT'
  | 'NATIVE_SPEAKER'
  | 'VERY_GOOD_COMMAND'
  | 'WORKING_KNOWLEDGE';

export type ProfileStatus =
  | 'APPROVED'
  | 'DISAPPROVED'
  | 'NEEDFIX'
  | 'PENDING'
  | 'REVIEWING';

/**
 * Properties by which skills connections can be ordered.
 */
export enum SkillOrderField {
  createdAt = 'createdAt',
  id = 'id',
  name = 'name',
  updatedAt = 'updatedAt',
}

/**
 * Properties by which tags connections can be ordered.
 */
export enum TagOrderField {
  createdAt = 'createdAt',
  id = 'id',
  name = 'name',
  updatedAt = 'updatedAt',
}

/**
 * Properties by which users connections can be ordered.
 */
export enum UserOrderField {
  createdAt = 'createdAt',
  email = 'email',
  id = 'id',
  state = 'state',
  updatedAt = 'updatedAt',
  username = 'username',
}

//==============================================================
// END Enums and Input Objects
//==============================================================

export type UserRoleType = 'ADMIN' | 'MANAGER' | 'USER';
