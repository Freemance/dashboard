import * as React from 'react';

import Typography from '@material-ui/core/Typography';

// Types
import { IProps } from './type';

// Styles
import useDashboardStyles from './Dashboard.styles';

const Dashboard: React.FC<IProps> = () => {
  const classes = useDashboardStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" color="primary">
        Dasboard
      </Typography>
    </div>
  );
};

export default Dashboard;
