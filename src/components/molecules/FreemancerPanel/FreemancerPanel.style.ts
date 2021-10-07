import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ITheme } from 'src/utils/types';

const useFreemancerPanelStyles = makeStyles((theme: ITheme) =>
  createStyles({
    avatar: {
      width: 90,
      height: 90,
      borderRadius: '.357rem',
      backgroundColor: theme.palette.primary.lightBg,
      color: theme.palette.primary.main,
      '& svg': {},
    },
    header: {
      '& .MuiListItemAvatar-root': {
        marginRight: '1rem',
      },
    },
    name: {
      color: theme.palette.text.primary,
      fontSize: '1.286rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    email: {
      color: theme.palette.text.primary,
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.45,
    },
    control: {},
    progress: {
      width: 18,
      height: 18,
      position: 'relative',
      marginLeft: 5,
      '& .MuiCircularProgress-root': {
        color: theme.palette.info.main,
      },
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
  })
);

export default useFreemancerPanelStyles;
