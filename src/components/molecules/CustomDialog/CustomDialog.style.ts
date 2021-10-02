import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ITheme } from 'src/utils/types';

const useCustomDialogStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {},
    info: {
      color: theme.palette.primary.main,
    },
    error: {
      color: theme.palette.error.main,
    },
    success: {
      color: theme.palette.success.main,
    },
  })
);

export default useCustomDialogStyles;
