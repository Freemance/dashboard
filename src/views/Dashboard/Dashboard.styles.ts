import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useDashboardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
  })
);

export default useDashboardStyles;
