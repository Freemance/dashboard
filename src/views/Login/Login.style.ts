import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ITheme } from 'src/utils/types';

const useLoginStyle = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
    title: {
      position: 'relative',
      textAlign: 'center',
      textTransform: 'capitalize',
      color: theme.palette.text.primary,
    },
  })
);

export default useLoginStyle;
