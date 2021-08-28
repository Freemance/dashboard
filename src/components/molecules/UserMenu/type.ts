import * as React from 'react';
import { TUserRole } from 'src/utils/types';
import { MenuItemProps, Omit } from '@material-ui/core';

export interface IProps {
  isOnline?: boolean | undefined;
  onLogOut?: () => void;
  user?: IUser;
}

export interface IUser {
  avatar?: string | undefined;
  firstName?: string | undefined;
  role?: TUserRole;
}

export interface IMenuItem extends Omit<MenuItemProps, 'component' | 'button'> {
  component?: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement>
  >;
  to?: string | undefined;
}
