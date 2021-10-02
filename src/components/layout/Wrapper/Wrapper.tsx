import React from 'react';
import { useQuery } from '@apollo/client';
import { SnackbarKey, useSnackbar } from 'notistack';

// Context
import { GlobalContext } from 'src/context';
import { setStats, setAdminUser } from 'src/context/reducer';

// Types
import { IProps } from './type';
import { GET_INITIAL_DATA } from 'src/providers/graphql/core/core.query.gql';

const Wrapper: React.FC<IProps> = ({ children }: IProps) => {
  const { dispatch, state } = React.useContext(GlobalContext);

  let key: SnackbarKey;
  // Snackbar
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useQuery(GET_INITIAL_DATA, {
    onCompleted: (data) => {
      if (data) {
        const { me, uptime, getUsersStatistics } = data;
        if (!state.system.stats.isOnline) {
          dispatch(
            setAdminUser({
              username: me.username,
              email: me.email,
              role: me.role,
              id: me.id,
            })
          );
          dispatch(
            setStats({
              uptime: uptime,
              isOnline: true,
              ...getUsersStatistics,
            })
          );
        }
        key && closeSnackbar(key);
      }
    },
    onError: (error) => {
      enqueueSnackbar(error.name, {
        variant: 'error',
        persist: false,
      });
    },
  });

  return <div>{children}</div>;
};

export default Wrapper;
