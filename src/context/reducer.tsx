import { GlobalState } from './state';
import { ActionType, GlobalActions } from './actions';

export function globalReducer(
  state: GlobalState,
  action: GlobalActions
): GlobalState {
  switch (action.type) {
    case ActionType.SwitchTheme:
      return {
        ...state,
        system: {
          ...state.system,
          theme: state.system.theme === 'light' ? 'dark' : 'light',
        },
      };

    default:
      return state;
  }
}
