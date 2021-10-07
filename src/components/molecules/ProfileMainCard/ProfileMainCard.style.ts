import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ITheme } from 'src/utils/types';

const useProfileMainCardStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
    },
    box: {},
  })
);

export default useProfileMainCardStyles;
