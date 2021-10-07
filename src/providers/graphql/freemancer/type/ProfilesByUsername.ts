/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileStatus, LANLVL } from 'type/globalTypes';

// ====================================================
// GraphQL query operation: ProfilesById
// ====================================================

export interface ProfilesByIdTag {
  __typename: 'Tag';
  /**
   * Tag name
   */
  name: string;
}

export interface ProfilesByIdSkill {
  __typename: 'Skill';
  id: number;
  /**
   * Skill icon paths
   */
  icon: string[] | null;
  /**
   * Skill name
   */
  name: string;
}

export interface ProfilesByIdCourse {
  __typename: 'Course';
  /**
   * Course name
   */
  course: string;
  /**
   * Description associated  to the course
   */
  description: string | null;
  /**
   * Start date associated  to the course
   */
  startDate: any;
  /**
   * End date associated  to the course
   */
  endDate: any;
  /**
   * Institution name
   */
  institution: string;
}

export interface ProfilesByIdJob {
  __typename: 'Job';
  /**
   * Company associated  to the job
   */
  company: string | null;
  /**
   * Description associated  to the job
   */
  description: string | null;
  /**
   * Job name
   */
  name: string;
  /**
   * Start date associated  to the job
   */
  startDate: any;
  /**
   * End date associated  to the job
   */
  endDate: any | null;
  /**
   * Checks if the jobs is still in progress, default is false
   */
  inProgress: boolean | null;
}

export interface ProfilesByIdLanguage {
  __typename: 'Language';
  /**
   * Language name
   */
  language: string;
  /**
   * Language lvl asociated to Language
   */
  lvl: LANLVL;
}

export interface ProfilesByIdPortfolioSkill {
  __typename: 'Skill';
  /**
   * Skill name
   */
  name: string;
  /**
   * Skill icon paths
   */
  icon: string[] | null;
}

export interface ProfilesByIdPortfolioItem {
  __typename: 'Portfolio';
  /**
   * Name of the proyect
   */
  proyect: string | null;
  /**
   * Description associated to the proyect
   */
  description: string | null;
  /**
   * Screenshots associated to the proyect
   */
  screenshts: string[] | null;
  /**
   * Start date associated to the proyect
   */
  startDate: any;
  /**
   * End date associated to the proyect
   */
  endDate: any;
  /**
   * Link associated to the proyect
   */
  link: string | null;
  /**
   * Skills associated to the proyect
   */
  skills: ProfilesByIdPortfolioSkill[] | null;
}

export interface ProfilesByIdProfile {
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
   * JobTitle name
   */
  jobTitle: string | null;
  /**
   * Slyk Username
   */
  slykUser: string;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * Bio description
   */
  bio: string | null;
  /**
   * Tag associated  to the profile
   */
  tag: ProfilesByIdTag | null;
  /**
   * Date of birth
   */
  dateOfBirth: any | null;
  /**
   * Profile Status
   */
  profileStatus: ProfileStatus;
  /**
   * Address
   */
  address: string | null;
  /**
   * City name
   */
  city: string | null;
  /**
   * Country name
   */
  country: string | null;
  /**
   * PostalCode
   */
  postalCode: string | null;
  /**
   * Skills associated  to the profile
   */
  skills: ProfilesByIdSkill[];
  /**
   * Courses associated  to the profile
   */
  courses: ProfilesByIdCourse[] | null;
  /**
   * Phone number
   */
  phone: string | null;
  /**
   * Jobs associated  to the profile
   */
  employmentHistory: ProfilesByIdJob[] | null;
  /**
   * Languages associated  to the profile
   */
  languages: ProfilesByIdLanguage[] | null;
  /**
   * Portfolio associated  to the profile
   */
  portfolioItem: ProfilesByIdPortfolioItem[] | null;
}

export interface ProfilesById {
  profileById: ProfilesByIdProfile | null;
}

export interface ProfilesByIdVariables {
  profileId: number;
}
