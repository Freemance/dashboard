import React from 'react';
import { Grid, Typography } from '@material-ui/core';
// import NotFoundImg from 'src/assets/images/undraw_page_not_found_su7k.svg';

import useNotFundStyles from './NotFound.style';

const NotFound: React.FC = () => {
  const classes = useNotFundStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item lg={6} xs={12}>
          <div className={classes.content}>
            <Typography variant="h1">
              404: La pagina que busca no existe.
            </Typography>
            <Typography variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
