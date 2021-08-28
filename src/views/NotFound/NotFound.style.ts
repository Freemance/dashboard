import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useNotFundStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
    content: {
      paddingTop: 150,
      textAlign: 'center',
    },
    image: {
      marginTop: 50,
      display: 'inline-block',
      maxWidth: '100%',
      width: 560,
    },
  })
);

export default useNotFundStyles;
