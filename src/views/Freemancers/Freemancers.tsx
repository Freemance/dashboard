import { Typography } from '@material-ui/core';
import * as React from 'react';
import { IProps } from './type';

import useFreemancersStyles from './Freemancers.style';
import FreemancersTable from 'src/components/organisms/FreemancersTable';

const Freemancers: React.FC<IProps> = () => {
  const classes = useFreemancersStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h3" component="h6">
        Freemancers List
      </Typography>
      <FreemancersTable />
    </section>
  );
};

export default Freemancers;
