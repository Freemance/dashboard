import { makeStyles, createStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';

const useCustom404Style = makeStyles((theme: ITheme) =>
  createStyles({
    content: {
      paddingTop: 10,
      textAlign: 'center',
    },
    image: {
      marginTop: 10,
      display: 'inline-block',
      maxWidth: '100%',
      width: 412,
    },
    title: {
      color: theme.palette.text.primary,
    },
    subTitle: {
      color: theme.palette.text.secondary,
    },
  })
);

export default useCustom404Style;
