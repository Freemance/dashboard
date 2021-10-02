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
  })
);

export default useFreemancerPanelStyles;
