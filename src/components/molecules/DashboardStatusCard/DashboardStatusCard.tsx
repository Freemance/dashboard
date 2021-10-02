import * as React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
interface IProps {}

import useDashboardStatusCardStyles from './DashboardStatusCard.style';

const DashboardStatusCard: React.FC<IProps> = (props: IProps) => {
  const classes = useDashboardStatusCardStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Dashboard Status" />
      <CardContent></CardContent>
    </Card>
  );
};

export default DashboardStatusCard;
