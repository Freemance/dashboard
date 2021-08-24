import { CardClassKey, StyleRules } from '@material-ui/core';

export const MuiCard: Partial<StyleRules<CardClassKey>> = {
  root: {
    background: `
      linear-gradient(var(--color-papper),
      var(--color-papper)) padding-box,
      linear-gradient(to right top, #979fe3, rgb(255 255 255 / 0%)) border-box`,
    borderRadius: 20,
    border: '2px solid transparent',
    boxShadow: 'none',
  },
};
