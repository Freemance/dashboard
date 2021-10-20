import * as palettes from '../palettes';

export const MuiTableRow = {
  root: {
    '&$hover': {
      '&:hover': {
        backgroundColor: palettes.lightPalette.primary.lightBg,
        cursor: 'pointer',
      },
    },
  },
};
