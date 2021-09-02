import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ITheme } from 'src/utils/types';
const useSideBarNavStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {},
    item: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0,
    },
    button: {
      color: theme.palette.text.primary,
      padding: '10px 8px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%',
      borderRadius: '4px 0 0 4px',
      fontWeight: theme.typography.fontWeightMedium,
      '& > span': {
        transition: 'margin-left .3s ease',
      },
      '&:hover > span': {
        color: theme.palette.text.secondary,
        marginLeft: '5px',
      },
    },
    icon: {
      color: theme.palette.text.primary,
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(2),
      strokeWidth: 2,
    },
    active: {
      color: theme.palette.info.main,
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.info.lightBg,
      borderRight: `3px solid ${theme.palette.info.main}`,
      '&:hover': {
        backgroundColor: theme.palette.info.lightBg,
        color: theme.palette.info.dark,
        borderRight: `3px solid ${theme.palette.info.dark}`,
      },
      '&:hover > span': {
        color: theme.palette.info.dark,
      },
      '& $icon': {
        color: theme.palette.info.main,
      },
      '&:hover  $icon': {
        color: theme.palette.info.dark,
      },
    },
  })
);

export default useSideBarNavStyles;
