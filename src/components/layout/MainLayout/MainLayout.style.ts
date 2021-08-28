import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
      overflowY: 'auto',
      paddingTop: 56,
      minHeight: '100vh',
      [theme.breakpoints.up('sm')]: {
        paddingTop: 64,
      },
      '&::-webkit-scrollbar': {
        backgroundColor: 'rgb(29, 38, 54)',
      },
    },
    shiftContent: {
      paddingLeft: 240,
    },
    content: {
      height: '100%',
    },
    headerNavbarShadow: {
      background: theme.palette.background.default,
      left: 0,
      paddingTop: '2.2rem',
      display: 'block',
      width: '100%',
      height: '102px',
      position: 'fixed',
      top: 0,
      zIndex: 139,
    },
  })
);

export default useStyles;
