import * as React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

// MUI Components
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableSortLabel,
  TablePagination,
  Paper,
  Tooltip,
  Hidden,
} from '@material-ui/core';

// Custom components
import FreemancersTableRow from 'src/components/molecules/FreemancersTableRow';
import { getFreemancers } from 'src/context/reducer';
import TablePlaceholder from 'src/components/atoms/TablePlaceholder';

// Types
import { GlobalContext } from 'src/context';
import { useQuery } from '@apollo/client';
import { GET_PROFILES } from 'src/providers/graphql/freemancer/freemancer.query.gql';
import { ProfileType } from 'src/context/state';
import { ProfileEdge } from 'src/providers/graphql/freemancer/type/Profiles';

// Context
import { setRowsPerPage, setPage } from 'src/context/reducer';
moment.locale('es');

const FreemancersTable: React.FC = () => {
  // Global Context
  const { state, dispatch } = React.useContext(GlobalContext);
  const [completed, setCompleted] = React.useState(false);
  const users: ProfileType[] = [];
  const { loading, data, error, refetch } = useQuery(GET_PROFILES, {
    variables: {
      first: state.freemancersTable.rowsPerPage,
      direction: state.freemancersTable.order,
      sortField: state.freemancersTable.orderBy,
      skip: state.freemancersTable.page * state.freemancersTable.rowsPerPage,
    },
    errorPolicy: 'all',
    onCompleted: (data) => {
      if (data && data.profileFilterForAdmin) {
        const { edges, totalCount } = data.profileFilterForAdmin;
        if (edges && edges.length > 0) {
          edges.forEach((edge: ProfileEdge) => {
            users.push(edge.node);
            console.log(edge);
          });
          console.log('Users', users);
          dispatch(getFreemancers(users, totalCount));
        }
      }
    },
  });

  if (error) {
    console.error('Ups some thinks go wrong!! ', error);
  }
  // Handle data wen refetch
  if (data && data.profileFilterForAdmin && !completed) {
    const { edges, totalCount } = data.profileFilterForAdmin;
    if (edges && edges.length > 0) {
      edges.forEach((edge: ProfileEdge) => {
        users.push(edge.node);
        console.log(edge);
      });
      console.log('Users', users);
      dispatch(getFreemancers(users, totalCount));
      setCompleted(true);
    }
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    dispatch(setPage(newPage));
    refetch({
      first: state.freemancersTable.rowsPerPage,
      direction: state.freemancersTable.order,
      sortField: state.freemancersTable.orderBy,
      skip: newPage * state.freemancersTable.rowsPerPage,
    });
    setCompleted(false);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setRowsPerPage(+event.target.value));
    refetch({
      first: state.freemancersTable.rowsPerPage,
      direction: state.freemancersTable.order,
      sortField: state.freemancersTable.orderBy,
      skip: state.freemancersTable.page * state.freemancersTable.rowsPerPage,
    });
    setCompleted(false);
  };

  const handleStatusUpdate = () => {
    refetch({
      first: state.freemancersTable.rowsPerPage,
      direction: state.freemancersTable.order,
      sortField: state.freemancersTable.orderBy,
      skip: state.freemancersTable.page * state.freemancersTable.rowsPerPage,
    });
    setCompleted(false);
  };
  const { t } = useTranslation('views', { useSuspense: false });
  return (
    <TableContainer component={Paper}>
      {state.freemancers && state.freemancers.length > 0 ? (
        <>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell
                  sortDirection={
                    state.freemancersTable.order === 'asc' ? 'desc' : 'asc'
                  }
                >
                  <Tooltip
                    enterDelay={300}
                    title={t('translation.freemancer.Username')}
                  >
                    <TableSortLabel active direction="desc">
                      {t('translation.freemancer.Username')}
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <Hidden smDown>
                  <TableCell align="center">
                    {t('translation.freemancer.Email')}
                  </TableCell>
                  <TableCell align="center">
                    {t('translation.freemancer.Slyk User')}
                  </TableCell>
                  <TableCell align="center">
                    {t('translation.freemancer.Register Date')}
                  </TableCell>
                  <TableCell align="center">
                    {t('translation.freemancer.State')}
                  </TableCell>
                </Hidden>
                <TableCell align="center">
                  {t('translation.freemancer.Profile Status')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state &&
                state.freemancers &&
                state.freemancers.length > 0 &&
                state.freemancers.map((node) => (
                  <FreemancersTableRow
                    key={node.id}
                    user={node.user}
                    profile={node}
                    onRefetch={handleStatusUpdate}
                  />
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            count={state.freemancersTable.totalCount || 0}
            component="div"
            rowsPerPage={state.freemancersTable.rowsPerPage || 5}
            page={state.freemancersTable.page || 0}
            backIconButtonProps={{
              'aria-label': 'previous page',
            }}
            nextIconButtonProps={{
              'aria-label': 'next page',
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <TablePlaceholder loading={loading} />
      )}
    </TableContainer>
  );
};

export default FreemancersTable;
