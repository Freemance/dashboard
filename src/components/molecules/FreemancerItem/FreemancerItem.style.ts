import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ITheme } from 'src/utils/types';

// Styles Hook
const useFreemancerItemStylesStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    avatar: {
      backgroundColor: theme.palette.warning.lightBg,
      '& svg': {
        color: theme.palette.warning.main,
        width: '60%',
      },
    },
  })
);

export default useFreemancerItemStylesStyles;
