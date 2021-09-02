import * as React from 'react';
// import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

// Custom component
import Custom404 from 'src/components/atoms/Custom404';

// Style
import useNotFundStyles from './NotFound.style';

const NotFound: React.FC = () => {
  const classes = useNotFundStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item lg={6} xs={12}>
          <Custom404 />
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
