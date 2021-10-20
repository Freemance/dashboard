import { makeStyles, createStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';

const useProfileHeaderCardStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    header: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      bottom: '-2rem',
      left: '2.14rem',
      width: 'auto',
      [theme.breakpoints.down('sm')]: {
        position: 'relative',
        flexDirection: 'column',
      },
      '& .MuiListItemText-primary': {
        color: theme.palette.text.primary,
        marginTop: theme.spacing(1),
        fontSize: '1.714rem',
        marginBottom: '.5rem',
        lineHeight: '1.2rem',
        fontWeight: 500,
      },
      '& .MuiListItemText-secondary': {
        color: theme.palette.text.secondary,
        lineHeight: '1.5rem',
        marginBottom: '1rem',
        marginTop: theme.spacing(1),
        fontWeight: 400,
        fontSize: '1rem',
      },
    },
    poster: {
      minHeight: 250,
      backgroundColor: theme.palette.primary.lightBg,
      position: 'relative',
    },
    profileNav: {
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
      marginLeft: '13.2rem',
      '& .MuiTabs-indicator': {
        display: 'none',
      },
    },
    navItem: {
      textTransform: 'capitalize',
      color: theme.palette.text.primary,
      borderRadius: 10,
      border: '0px solid',
      minWidth: 120,
      '&.Mui-selected': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
    avatar: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      width: 120,
      height: 120,
      marginRight: theme.spacing(3),
      border: `1px solid ${theme.palette.primary.contrastText}`,
    },
    progress: {
      width: 18,
      height: 18,
      position: 'relative',
      marginLeft: 5,
      '& .MuiCircularProgress-root': {
        color: theme.palette.info.main,
      },
    },
  })
);

export default useProfileHeaderCardStyles;
