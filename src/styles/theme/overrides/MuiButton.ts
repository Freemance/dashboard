import { ButtonClassKey, StyleRules } from '@material-ui/core';

export const MuiButton: Partial<StyleRules<ButtonClassKey>> = {
  root: {
    borderRadius: '.5rem',
    textTransform: 'capitalize',
  },
  outlined: {
    borderRadius: '.5rem',
    borderWidth: '2px',
  },
};
