import * as React from 'react';
import { useTranslation } from 'react-i18next';

// Context
import { GlobalContext } from 'src/context';

// Mui components
import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';

// Custom components
import IconInfoItem from '../IconInfoItem';
import { Users, Clock, UserCheck, TrendingUp } from 'react-feather';

const StatisticsCard: React.FC = () => {
  const { t } = useTranslation('views', { useSuspense: false });
  const { state } = React.useContext(GlobalContext);
  return (
    <Card>
      <CardHeader
        title={t('translation.dashboard.StatisticsCard.Statistics')}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <IconInfoItem
              label={t('translation.dashboard.StatisticsCard.Freemancers')}
              data={state.system.stats.totalUsers}
              icon={<TrendingUp size={24} />}
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <IconInfoItem
              label={t('translation.dashboard.StatisticsCard.Aproved')}
              data={state.system.stats.usersApproved}
              icon={<UserCheck size={24} />}
              color="success"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <IconInfoItem
              label={t('translation.dashboard.StatisticsCard.Pending')}
              data={state.system.stats.usersPending}
              icon={<Clock size={24} />}
              color="error"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <IconInfoItem
              label={t('translation.dashboard.StatisticsCard.Clients')}
              data={state.system.stats.totalCLients}
              icon={<Users size={24} />}
              color="info"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
