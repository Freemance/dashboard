/* eslint-disable no-unused-vars */
import { ProfileStatus } from 'type/globalTypes';
import {
  UserType,
  ThemeType,
  SkillType,
  Order,
  ProfileType,
  AdminUserType,
  StatsType,
  TagType,
} from './state';

export enum ActionType {
  SetStats,
  GetFreemancers,
  SetCurrentFreemancer,
  SetFreemancerStatus,
  SetAdminUser,
  SetSkill,
  GetSkills,
  SetTag,
  GetTags,
  SwitchTheme,
  // SwitchLocal,
  SetRowsPerPage,
  SetPage,
  ChangeOrder,
  SetOpenPanel,
}

interface Action {
  type: ActionType;
  payload?: any;
}

export interface SetStats extends Action {
  type: ActionType.SetStats;
  payload: {
    stats: StatsType;
  };
}
export interface GetFreemancers extends Action {
  type: ActionType.GetFreemancers;
  payload: {
    freemancers: ProfileType[];
    totalCount: number;
  };
}

export interface SetCurrentFreemancer extends Action {
  type: ActionType.SetCurrentFreemancer;
  payload: {
    freemancer: ProfileType;
  };
}

export interface SetAdminUser extends Action {
  type: ActionType.SetAdminUser;
  payload: {
    adminUser: AdminUserType;
  };
}

export interface SetFreemancerStatus extends Action {
  type: ActionType.SetFreemancerStatus;
  payload: { status: ProfileStatus };
}

export interface SetSkill extends Action {
  type: ActionType.SetSkill;
  payload: {
    skill: SkillType;
  };
}

export interface SetTag extends Action {
  type: ActionType.SetTag;
  payload: {
    tag: TagType;
  };
}

export interface GetSkills extends Action {
  type: ActionType.GetSkills;
  payload: {
    skills: SkillType[];
  };
}

export interface GetTags extends Action {
  type: ActionType.GetTags;
  payload: {
    tags: TagType[];
  };
}

/* export interface SwitchLocal {
  type: ActionType.SwitchLocal;
  payload: { local: string };
}*/

export interface SwitchTheme extends Action {
  type: ActionType.SwitchTheme;
  payload: { theme: ThemeType };
}

// Freemancers table actions
export interface SetRowsPerPage extends Action {
  type: ActionType.SetRowsPerPage;
  payload: { rows: number };
}

export interface SetPage extends Action {
  type: ActionType.SetPage;
  payload: { page: number };
}

export interface ChangeOrder extends Action {
  type: ActionType.ChangeOrder;
  payload: {
    field: string;
  };
}

export interface SetOpenPanel {
  type: ActionType.SetOpenPanel;
  payload: {
    panelId: number | false;
  };
}

export type GlobalActions =
  | SetCurrentFreemancer
  | GetFreemancers
  | SetFreemancerStatus
  | SetSkill
  | GetSkills
  | SetTag
  | GetTags
  // SwitchLocal
  | SwitchTheme
  | SetRowsPerPage
  | SetPage
  | ChangeOrder
  | SetOpenPanel
  | SetAdminUser
  | SetStats;
