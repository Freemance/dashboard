import * as React from 'react';
import { useTranslation } from 'react-i18next';
// MUI components
import { Container, Grid, Divider } from '@material-ui/core';

import TextIcon from 'src/components/atoms/TextIcon';
import DashboardStatusCard from 'src/components/molecules/DashboardStatusCard';

import { Grid as GridIcon } from 'react-feather';
// Types
import { IProps } from './type';

// Styles
import useDashboardStyles from './Dashboard.styles';
import StatisticsCard from 'src/components/molecules/StatisticsCard';

const Dashboard: React.FC<IProps> = () => {
  const classes = useDashboardStyles();
  const { t } = useTranslation('views', { useSuspense: false });

  return (
    <Container className={classes.root}>
      <div style={{ padding: 20 }}>
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
              icon={<GridIcon size={18} />}
              color="secondary"
              variant="rounded"
            />
            <Divider />
          </Grid>
          <Grid item xs={12} sm={3} md={4}>
            <DashboardStatusCard />
          </Grid>
          <Grid item xs={12} sm={9} md={8}>
            <StatisticsCard />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Dashboard;
