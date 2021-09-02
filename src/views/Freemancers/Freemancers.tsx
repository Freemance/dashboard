import { Container, Typography } from '@material-ui/core';
import * as React from 'react';
import { IProps } from './type';

import useFreemancersStyles from './Freemancers.style';

const Freemancers: React.FC<IProps> = () => {
  const classes = useFreemancersStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h1" component="h3">
        Freemancers List
      </Typography>
    </Container>
  );
};

export default Freemancers;
