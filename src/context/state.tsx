export type FreemancerType = {
  id: string;
  firstName: string;
  lastName: string;
  slykEmail: string;
  avatar?: string;
  status: StatusType;
};

export type StatusType = 'aproved' | 'pending' | 'needfix' | 'disaproved';
export type UserRoleType = 'admin' | 'superadmin';
export type UserType = {
  email: string;
  firstName: string;
  lastName?: string;
  role: UserRoleType;
};

export type SkillType = {
  name: string;
  icon?: string;
};
export type ThemeType = 'light' | 'dark';

export type SystemType = {
  isOnline: boolean;
  theme: ThemeType;
  locale: string;
  definedSkills: SkillType[];
  freemancersCount: number;
};

export interface GlobalState {
  freemancers: FreemancerType[] | null;
  currenFreemancer: FreemancerType | null;
  user: UserType | null;
  system: SystemType;
}

export const initialGlobalState: GlobalState = {
  freemancers: [],
  currenFreemancer: null,
  user: null,
  system: {
    isOnline: false,
    theme: 'light',
    locale: 'en',
    definedSkills: [],
    freemancersCount: 0,
  },
};
