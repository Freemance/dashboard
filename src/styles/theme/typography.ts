import * as palette from './palettes';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

export const typography: TypographyOptions = {
  h1: {
    color: palette.lightPalette.primary.dark,
    fontWeight: 500,
    fontSize: '35px',
    letterSpacing: '-0.24px',
    lineHeight: '40px',
  },
  h2: {
    color: palette.lightPalette.primary.dark,
    fontWeight: 500,
    fontSize: '29px',
    letterSpacing: '-0.24px',
    lineHeight: '32px',
  },
  h3: {
    color: palette.lightPalette.primary.dark,
    fontWeight: 500,
    fontSize: '24px',
    letterSpacing: '-0.06px',
    lineHeight: '28px',
  },
  h4: {
    color: palette.lightPalette.primary.dark,
    fontWeight: 500,
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '24px',
  },
  h5: {
    color: palette.lightPalette.primary.dark,
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  h6: {
    color: palette.lightPalette.primary.dark,
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  subtitle1: {
    color: palette.lightPalette.primary.dark,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '25px',
  },
  subtitle2: {
    color: palette.lightPalette.primary.light,
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body1: {
    color: palette.lightPalette.primary.light,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body2: {
    color: palette.lightPalette.primary.light,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '18px',
  },
  button: {
    color: palette.lightPalette.primary.contrastText,
    fontSize: '14px',
  },
  caption: {
    color: palette.lightPalette.text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px',
  },
  overline: {
    color: palette.lightPalette.text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase',
  },
};
