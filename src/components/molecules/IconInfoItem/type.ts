import { ReactElement, ReactNode } from 'react';

export interface IProps {
  variant?: IconVariant;
  color?: IconColor;
  icon: ReactElement;
  label: ReactNode;
  data: ReactNode;
}

export type IconVariant = 'square' | 'rounded' | 'circular' | undefined;

export type IconColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | undefined;
