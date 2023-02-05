import * as React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

// Custom components
import { getFreemancers } from 'src/context/reducer';

// Context
import { GlobalContext } from 'src/context';
import { useQuery } from '@apollo/client';

// Type
import { RowsData } from './type';
import { GET_PROFILES } from 'src/providers/graphql/freemancer/freemancer.query.gql';
import { ProfileType } from 'src/context/state';
import { ProfileEdge } from 'src/providers/graphql/freemancer/type/Profiles';
import MUIDataTable, { MUIDataTableOptions } from 'mui-datatables';

moment.locale('es');

const FreemancersTable: React.FC = () => {
  const freemancers: RowsData[] = [];
  // Global Context
  const { state, dispatch } = React.useContext(GlobalContext);
  const [completed, setCompleted] = React.useState(false);
  const [values, setValues] = React.useState({
    clicked: false,
    redirectTo: null,
  });
  const users: ProfileType[] = [];
  const { data, error } = useQuery(GET_PROFILES, {
    variables: {
      first: 1000000,
      direction: 'asc',
      sortField: state.freemancersTable.orderBy,
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

  const { t } = useTranslation('views', { useSuspense: false });

  const columns = [
    {
      name: 'id',
      label: 'Id',
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        print: false,
      },
    },

    {
      name: 'username',
      label: t('translation.freemancer.Username'),
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'email',
      label: t('translation.freemancer.Email'),
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'slykUser',
      label: t('translation.freemancer.Slyk User'),
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'createdAt',
      label: t('translation.freemancer.Register Date'),
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'active',
      label: t('translation.freemancer.State'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'profileStatus',
      label: t('translation.freemancer.Profile Status'),
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  // Freemance data
  if (state.freemancers) {
    state.freemancers.forEach((freemance) => {
      freemancers.push({
        id: freemance.id,
        username: (freemance.user && freemance.user.username) || '',
        email: (freemance.user && freemance.user.email) || '',
        slykUser: freemance.slykUser || '',
        createdAt: moment(freemance.createdAt).format('lll'),
        active: freemance.user && freemance.user.active ? 'active' : 'inactive',
        profileStatus: freemance.profileStatus,
        ObjectData: freemance.id,
      });
    });
  }
  // Freemance data end

  const handleClick = (rowMeta: any) => {
    setValues((values) => ({
      ...values,
      clicked: true,
      redirectTo: rowMeta[0],
    }));
  };

  const options: MUIDataTableOptions = {
    filterType: 'checkbox',
    onRowClick: handleClick,
    elevation: 1,
    selectableRowsHideCheckboxes: true,
  };

  return (
    <>
      {values.clicked && <Redirect to={`/freemancers/${values.redirectTo}`} />}
      <MUIDataTable
        columns={columns}
        data={freemancers}
        options={options}
        title={t('translation.freemancers.Freemancers')}
      />
    </>
  );
};

export default FreemancersTable;
