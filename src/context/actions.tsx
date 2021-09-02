/* eslint-disable no-unused-vars */
import { FreemancerType, StatusType, ThemeType } from './state';

export enum ActionType {
  GetFreemancers,
  GetCurrentFreemancer,
  SetFreemancerStatus,
  GetSkills,
  GetSkill,
  GetSystemStats,
  SwitchTheme,
  SwitchLocal,
}

export interface getFreemancers {
  type: ActionType.GetFreemancers;
  payload: { freemancers: FreemancerType[] };
}

export interface getCurrentFreemancer {
  type: ActionType.GetCurrentFreemancer;
  payload: { id: string };
}

export interface setFreemancerStatus {
  type: ActionType.SetFreemancerStatus;
  payload: { freemancer: FreemancerType; status: StatusType };
}

export interface switchTheme {
  type: ActionType.SwitchTheme;
  payload: ThemeType;
}

export interface switchLocal {
  type: ActionType.SwitchLocal;
  payload: { local: string };
}

export type GlobalActions =
  | getCurrentFreemancer
  | getFreemancers
  | setFreemancerStatus
  | switchTheme
  | switchLocal;
