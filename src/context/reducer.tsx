import {
  GlobalState,
  SkillType,
  ThemeType,
  ProfileType,
  AdminUserType,
  StatsType,
  TagType,
  FullProfileType,
  ProfilePanelType,
} from './state';
import {
  ActionType,
  GlobalActions,
  SwitchTheme,
  GetFreemancers,
  SetFreemancerStatus,
  SetAdminUser,
  SetCurrentFreemancer,
  SetCurrentProfile,
  SetSkill,
  GetSkills,
  SetPage,
  SetRowsPerPage,
  ChangeOrder,
  SetOpenPanel,
  SetProfilePanelValues,
  SetStats,
  GetTags,
  SetTag,
  SetFreemancerActive,
} from './actions';
import { ProfileStatus } from 'type/globalTypes';
import { LocalStorage } from 'src/services/LocalStorage/LocalStorage.service';

export function globalReducer(
  state: GlobalState,
  action: GlobalActions
): GlobalState {
  switch (action.type) {
    case ActionType.SetStats:
      return {
        ...state,
        system: {
          ...state.system,
          stats: {
            ...state.system.stats,
            ...action.payload.stats,
          },
        },
      };
    case ActionType.GetFreemancers:
      return {
        ...state,
        freemancers: action.payload.freemancers,
        freemancersTable: {
          ...state.freemancersTable,
          totalCount: action.payload.totalCount,
        },
      };
    case ActionType.SetCurrentFreemancer:
      return {
        ...state,
        currentFreemancer: {
          ...state.currentFreemancer,
          ...action.payload.freemancer,
        },
      };
    case ActionType.SetCurrentProfile:
      return {
        ...state,
        currentProfile: {
          ...state.currentProfile,
          ...action.payload.profile,
        },
      };
    case ActionType.SetFreemancerStatus:
      return {
        ...state,
        currentFreemancer: {
          ...state.currentFreemancer,
          profileStatus: action.payload.status,
        },
      };
    case ActionType.SetFreemancerActive:
      return {
        ...state,
        currentFreemancer: {
          ...state.currentFreemancer,
          user: {
            ...state.currentFreemancer.user,
            active: action.payload.active,
          },
        },
      };
    case ActionType.SetProfilePanelValues:
      return {
        ...state,
        profilePanel: {
          ...state.profilePanel,
          selectedPanel: action.payload.profilePanel.selectedPanel,
        },
      };
    case ActionType.SetAdminUser:
      return {
        ...state,
        adminUser: action.payload.adminUser,
      };
    case ActionType.SwitchTheme:
      LocalStorage.set('theme', action.payload.theme);
      return {
        ...state,
        system: {
          ...state.system,
          theme: action.payload.theme,
        },
      };
    case ActionType.SetSkill:
      return {
        ...state,
        system: {
          ...state.system,
          currentSkill: {
            ...state.system.currentSkill,
            ...action.payload.skill,
          },
        },
      };
    case ActionType.SetTag:
      return {
        ...state,
        system: {
          ...state.system,
          currentTag: {
            ...state.system.currentTag,
            ...action.payload.tag,
          },
        },
      };
    case ActionType.GetSkills:
      return {
        ...state,
        system: {
          ...state.system,
          definedSkills: action.payload.skills,
        },
      };
    case ActionType.GetTags:
      return {
        ...state,
        system: {
          ...state.system,
          definedTags: action.payload.tags,
        },
      };
    case ActionType.SetRowsPerPage:
      return {
        ...state,
        freemancersTable: {
          ...state.freemancersTable,
          rowsPerPage:
            action.payload.rows || state.freemancersTable.rowsPerPage,
        },
      };
    case ActionType.SetPage:
      return {
        ...state,
        freemancersTable: {
          ...state.freemancersTable,
          page: action.payload.page || state.freemancersTable.page,
        },
      };
    case ActionType.ChangeOrder:
      return {
        ...state,
        freemancersTable: {
          ...state.freemancersTable,
          order: state.freemancersTable.order === 'desc' ? 'asc' : 'desc',
          orderBy: action.payload.field || state.freemancersTable.orderBy,
        },
      };
    case ActionType.SetOpenPanel:
      return {
        ...state,
        freemancersTable: {
          ...state.freemancersTable,
          openPanel: action.payload.panelId || state.freemancersTable.openPanel,
        },
      };
    default:
      return state;
  }
}

export const toggleTheme = (theme: ThemeType): SwitchTheme => ({
  type: ActionType.SwitchTheme,
  payload: { theme: theme },
});

export const setStats = (stats: StatsType): SetStats => ({
  type: ActionType.SetStats,
  payload: {
    stats,
  },
});

// Skills
export const setSkill = (skill: SkillType): SetSkill => ({
  type: ActionType.SetSkill,
  payload: {
    skill,
  },
});

export const getSkills = (skills: SkillType[]): GetSkills => ({
  type: ActionType.GetSkills,
  payload: {
    skills,
  },
});

// Tags
export const setTag = (tag: TagType): SetTag => ({
  type: ActionType.SetTag,
  payload: {
    tag,
  },
});

export const getTags = (tags: TagType[]): GetTags => ({
  type: ActionType.GetTags,
  payload: {
    tags,
  },
});

export const getFreemancers = (
  freemancers: ProfileType[],
  totalCount: number
): GetFreemancers => ({
  type: ActionType.GetFreemancers,
  payload: {
    freemancers,
    totalCount,
  },
});

export const setCurrentFreemancer = (
  freemancer: ProfileType
): SetCurrentFreemancer => ({
  type: ActionType.SetCurrentFreemancer,
  payload: {
    freemancer,
  },
});

export const setCurrentProfile = (
  profile: FullProfileType
): SetCurrentProfile => ({
  type: ActionType.SetCurrentProfile,
  payload: {
    profile,
  },
});

export const setFreemancerStatus = (
  status: ProfileStatus
): SetFreemancerStatus => ({
  type: ActionType.SetFreemancerStatus,
  payload: {
    status,
  },
});

export const setFreemancerActive = (
  active: boolean
): SetFreemancerActive => ({
  type: ActionType.SetFreemancerActive,
  payload: {
    active,
  },
});

export const setAdminUser = (adminUser: AdminUserType): SetAdminUser => ({
  type: ActionType.SetAdminUser,
  payload: {
    adminUser,
  },
});

export const setPage = (page: number): SetPage => ({
  type: ActionType.SetPage,
  payload: {
    page,
  },
});

export const setRowsPerPage = (rows: number): SetRowsPerPage => ({
  type: ActionType.SetRowsPerPage,
  payload: {
    rows,
  },
});

export const changeOrder = (field: string): ChangeOrder => ({
  type: ActionType.ChangeOrder,
  payload: {
    field,
  },
});

export const setOpenPanel = (panelId: number | false): SetOpenPanel => ({
  type: ActionType.SetOpenPanel,
  payload: {
    panelId,
  },
});

export const setProfilePanelValues = (
  profilePanel: ProfilePanelType
): SetProfilePanelValues => ({
  type: ActionType.SetProfilePanelValues,
  payload: {
    profilePanel: profilePanel,
  },
});
