import * as React from 'react';
import { useTranslation } from 'react-i18next';

// MUI components
import { Divider, Grid } from '@material-ui/core';

import { UserCheck } from 'react-feather';

// custom components
import FreemancersTable from 'src/components/organisms/FreemancersTable';
import TextIcon from 'src/components/atoms/TextIcon';

import useFreemancersStyles from './Freemancers.style';
import { IProps } from './type';

const Freemancers: React.FC<IProps> = () => {
  const classes = useFreemancersStyles();
  const { t } = useTranslation('views', { useSuspense: false });

  return (
    <section className={classes.root}>
      <Grid
        container
        spacing={4}
        alignItems="stretch"
        justifyContent="center"
        direction="row"
      >
        <Grid item xs={12}>
          <TextIcon
            label={t('translation.dashboard.Dashboard')}
            icon={<UserCheck size={18} />}
            color="secondary"
            variant="rounded"
          />
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <FreemancersTable />
        </Grid>
      </Grid>
    </section>
  );
};

export default Freemancers;
