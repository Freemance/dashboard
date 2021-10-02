import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'src/utils/types';
import bgLeft from 'src/assets/images/settings-bg-left.min.svg';
import bgRight from 'src/assets/images/settings-bg.min.svg';

const useLoginFormStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      width: '100%',
      margin: '4rem auto',
      maxWidth: 350,
      minWidth: 250,
      position: 'relative',
      overflow: 'visible',
      border: `1px solid ${theme.palette.primary.light}`,
      [theme.breakpoints.down('sm')]: {
        transform: 'translateX(140px)',
      },
      [theme.breakpoints.down('xs')]: {
        transform: 'translateX(0)',
      },
      '&:before': {
        display: 'block',
        content: `" "`,
        position: 'absolute',
        height: '100%',
        width: 250,
        left: -251,
        backgroundImage: `url(${bgLeft})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        [theme.breakpoints.down('xs')]: {
          display: 'none',
        },
      },
      '&:after': {
        display: 'block',
        content: `" "`,
        position: 'absolute',
        height: '90%',
        width: 210,
        right: -169,
        bottom: 0,
        backgroundImage: `url(${bgRight})`,
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
    },
    progress: {
      color: theme.palette.primary.contrastText,
      margingLeft: 15,
    },
    grid: {
      height: 'calc(var(--vh, 1vh)*100)',
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
    },
    name: {
      marginTop: theme.spacing(3),
      color: theme.palette.white,
    },
    bio: {
      color: theme.palette.white,
    },
    contentContainer: {},
    content: {
      height: '100%',
      display: 'flex',
    },
    contentHeader: {
      display: 'block',
      alignItems: 'center',
      paddingTop: theme.spacing(1),
      paddingBototm: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    logoImage: {
      marginLeft: theme.spacing(4),
    },
    contentBody: {
      flexGrow: 1,
      display: 'block',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
      },
    },
    formLogo: {
      width: '150px',
      height: '150px',
      margin: '0 auto 10px',
    },
    form: {
      padding: '1.2rem 4rem',
      [theme.breakpoints.down('md')]: {
        padding: '1.2rem 3rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1.2rem 2rem',
      },
    },
    title: {
      marginTop: theme.spacing(3),
    },
    socialButtons: {
      marginTop: theme.spacing(3),
    },
    socialIcon: {
      marginRight: theme.spacing(1),
    },
    sugestion: {
      marginTop: theme.spacing(2),
    },
    textField: {
      marginTop: theme.spacing(2),
    },
    signInButton: {
      margin: theme.spacing(2, 0),
    },
    posterContainer: {
      minHeight: '100vh',
      textAlign: 'center',
      '& img': {
        height: '45vw',
        margin: '0 auto',
      },
    },
  })
);

export default useLoginFormStyles;
