import { SwitchClassKey, SwitchProps } from '@material-ui/core';

export interface IProps extends SwitchProps {
  classes?: Styles;
}

export interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}
