import { makeStyles, createStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';

const useTagCreatorStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      '& .MuiCardHeader-title': {
        fontSize: '1rem',
        fontWeight: 600,
        color: theme.palette.text.primary,
      },
    },
    tagList: {
      maxHeight: 360,
    },
    progress: {
      width: 18,
      height: 18,
      position: 'relative',
    },
    helpBtn: {},
  })
);

export default useTagCreatorStyles;
