import { makeStyles, createStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';

const useFreemanceProfileStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
  })
);

export default useFreemanceProfileStyles;
