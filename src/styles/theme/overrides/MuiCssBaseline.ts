import * as palettes from '../palettes';

export const MuiCssBaseline = {
  '@global': {
    body: {
      backgroundColor: palettes.lightPalette.background.gradient,
      margin: 0,
      fontFamily: `apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif`,
      webkitFontSmoothing: 'antialiased',
      mozOsxFontSmoothing: 'grayscale',
    },
    code: {
      fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace`,
    },
  },
};
