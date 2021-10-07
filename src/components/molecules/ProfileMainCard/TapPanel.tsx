import * as React from 'react';

import { Typography, Box } from '@material-ui/core';

import { TabPanelProps } from './type';
import useProfileMainCardStyles from './ProfileMainCard.style';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useProfileMainCardStyles();
  return (
    <Typography
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      component="div"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      <Box className={classes.box} p={3}>
        {children}
      </Box>
    </Typography>
  );
}

export default TabPanel;
