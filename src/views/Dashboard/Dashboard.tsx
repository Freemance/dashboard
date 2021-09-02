import * as React from 'react';

// MUI components
import { Container, Typography } from '@material-ui/core';

// Types
import { IProps } from './type';

// Styles
import useDashboardStyles from './Dashboard.styles';

const Dashboard: React.FC<IProps> = () => {
  const classes = useDashboardStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h1" color="primary">
        Dasboard
      </Typography>
    </Container>
  );
};

export default Dashboard;
