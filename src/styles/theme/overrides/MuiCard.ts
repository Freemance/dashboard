import { CardClassKey, StyleRules } from '@material-ui/core';

export const MuiCard: Partial<StyleRules<CardClassKey>> = {
  root: {
    borderRadius: 20,
    boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)',
  },
};
