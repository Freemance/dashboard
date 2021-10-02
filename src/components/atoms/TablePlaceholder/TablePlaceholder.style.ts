import { makeStyles, createStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';

const useTablePlaceholderStyle = makeStyles((theme: ITheme) =>
  createStyles({
    placeholder: {
      margin: '3rem auto',
      position: 'absolute',
      display: 'block',
      transform: 'translateX(-25%)',
      left: '50%',
    },
    progress: {
      margin: '3rem auto',
      position: 'absolute',
      display: 'block',
      transform: 'translate(-50%, -50%)',
      left: '50%',
      top: '40%',
    },
  })
);

export default useTablePlaceholderStyle;
