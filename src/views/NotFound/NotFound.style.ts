import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useNotFundStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);

export default useNotFundStyles;
