import { DrawerProps, Omit } from '@material-ui/core';

export interface IProps extends Omit<DrawerProps, 'variant'> {
  className?: string;
  onClose?: () => void;
  open: boolean;
  variant: TVariant;
}

export type TVariant = 'permanent' | 'persistent' | 'temporary';
