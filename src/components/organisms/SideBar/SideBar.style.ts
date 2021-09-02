import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useSideBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 240,
      background: theme.palette.background.paper,
      [theme.breakpoints.up('lg')]: {
        height: '100% ',
      },
    },
    root: {
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: `${theme.spacing(2)}px 0 0 ${theme.spacing(2)}px`,
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
    nav: {
      marginBottom: theme.spacing(2),
    },
  })
);

export default useSideBarStyles;
