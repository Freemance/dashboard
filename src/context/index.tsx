import * as React from 'react';

import { GlobalState, initialGlobalState } from './state';
import { GlobalActions } from './actions';
import { globalReducer } from './reducer';
import { IProps } from './type';

const GlobalContext = React.createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<GlobalActions>;
}>({
  state: initialGlobalState,
  dispatch: () => undefined,
});

const GlobalProvider: React.FC<IProps> = ({ children }: IProps) => {
  const [state, dispatch] = React.useReducer(globalReducer, initialGlobalState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
