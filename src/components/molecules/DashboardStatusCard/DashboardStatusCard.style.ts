import { makeStyles, createStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';

const useDashboardStatusCardStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      height: '100%',
      color: theme.palette.primary.contrastText,
      '& .MuiCardHeader-title': {
        color: theme.palette.primary.contrastText,
      },
    },
  })
);

export default useDashboardStatusCardStyles;
