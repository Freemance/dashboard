import { createStyles, makeStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';
import { IconColor } from './type';

interface SProp {
  color: IconColor;
}
const useIconInfoItemStyles = makeStyles((theme: ITheme) =>
  createStyles({
    ItemIcon: {
      '& svg': {
        color: ({ color }: SProp): string => theme.palette[color].main,
      },
      backgroundColor: ({ color }: SProp) => theme.palette[color].lightBg,
      width: 48,
      height: 48,
      marginRight: '1.5rem !important',
    },
    dataText: {
      color: theme.palette.text.primary,
      fontSize: '1.286rem',
      fontWeight: 600,
    },
  })
);

export default useIconInfoItemStyles;
