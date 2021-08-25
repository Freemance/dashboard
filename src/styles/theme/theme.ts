import { createTheme, ThemeOptions } from '@material-ui/core';
import * as palette from './palettes';
import { overrides } from './overrides';
import { typography } from './typography';

const options = (dark: boolean): ThemeOptions => {
  return {
    palette: dark ? palette.darkPalette : palette.lightPalette,
    overrides: overrides,
    typography: typography,
  };
};

export const darkTheme = createTheme(options(true));
export const lightTheme = createTheme(options(false));
