import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useFooterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
      textAlign: 'center',
    },
  })
);

export default useFooterStyles;
