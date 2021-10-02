import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useTopbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    flexGrow: {
      flexGrow: 1,
    },
    btn: {
      marginLeft: theme.spacing(1),
      color: theme.palette.text.primary,
    },
    appBar: {
      zIndex: 140,
      margin: '1.3rem 2rem 0',
      borderRadius: '.428rem',
      width: 'calc(100% - 4rem - 240px)',
      transition: 'width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
      boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%) !important',
      [theme.breakpoints.down('md')]: {
        width: 'calc(100% - 4rem)',
      },
    },
  })
);
export default useTopbarStyles;
