import { createStyles, makeStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';
import { IconColor } from './type';

interface SProp {
  color: IconColor;
}
const useTextIconStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    ItemIcon: {
      '& svg': {
        color: ({ color }: SProp): string => theme.palette[color].main,
      },
      backgroundColor: ({ color }: SProp) => theme.palette[color].lightBg,
      marginRight: '1.5rem !important',
    },
    label: {
      color: theme.palette.text.primary,
      fontSize: '1.286rem',
      fontWeight: 600,
    },
  })
);

export default useTextIconStyles;
