import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ITheme } from 'src/utils/types';

const useDashboardStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
  })
);

export default useDashboardStyles;
