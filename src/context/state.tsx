import { ReactNode } from 'react';
import { User, Profile } from 'src/providers/graphql/freemancer/type/Profiles';
import { ProfileStatus, UserRoleType } from 'type/globalTypes';
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type IProps = {
  children: ReactNode;
};

export interface ProfileType extends Omit<Profile, 'profileStatus'> {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  user: UserType;
  profileStatus: ProfileStatus | string;
  createdAt: string;
  updatedAt: string;
  slykUser: string;
  __typename: 'Profile';
}

export interface UserType extends User {
  id: number;
  email: string;
  username: string;
  role: UserRoleType;
  active: boolean;
  createdAt: string;
  profile?: ProfileType;
  __typename: 'User';
}

export interface AdminUserType {
  id: number;
  email: string;
  username: string;
  role: UserRoleType;
}

export type SkillType = {
  name?: string;
  icon?: string[];
  svgPath?: string;
  id?: number;
};

export type TagType = {
  name?: string;
  id?: number;
};

export type ThemeType = 'light' | 'dark';
export type Order = 'asc' | 'desc';
export type StatsType = {
  uptime?: number;
  totalUsers?: number;
  usersApproved?: number;
  usersPending?: number;
  totalCLients?: number;
  isOnline?: boolean;
};

export type SystemType = {
  stats: StatsType;
  theme: ThemeType;
  locale: string;
  definedSkills: SkillType[];
  currentSkill: SkillType;
  definedTags: TagType[];
  currentTag: TagType;
  freemancersCount: number;
};

export interface TableType {
  totalCount?: number;
  rowsPerPage?: number;
  order?: Order;
  orderBy?: string;
  page?: number;
  openPanel?: number | boolean;
}

export interface GlobalState {
  freemancers: ProfileType[] | null;
  currentFreemancer: ProfileType | null;
  adminUser: AdminUserType | null;
  freemancersTable: TableType;
  system: SystemType;
}

export const initialGlobalState: GlobalState = {
  freemancers: null,
  currentFreemancer: null,
  freemancersTable: {
    totalCount: 0,
    rowsPerPage: 10,
    order: 'asc',
    orderBy: 'firstName',
    page: 0,
  },
  adminUser: null,
  system: {
    stats: {
      uptime: 0,
      totalUsers: 0,
      usersApproved: 0,
      usersPending: 0,
      totalCLients: 0,
      isOnline: false,
    },

    theme: 'light',
    locale: 'en',
    definedSkills: [],
    currentSkill: {
      name: '',
      svgPath: '',
      icon: [],
      id: -1,
    },
    definedTags: [],
    currentTag: {
      name: '',
      id: -1,
    },
    freemancersCount: 0,
  },
};
