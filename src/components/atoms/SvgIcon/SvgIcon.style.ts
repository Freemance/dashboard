import { makeStyles, createStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';

import { IconColor } from './type';

interface SProp {
  color: IconColor;
}

const useSvgIconStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      fill: ({ color }: SProp): string => theme.palette[color].main,
      strokeWidth: 1,
    },
  })
);

export default useSvgIconStyles;
