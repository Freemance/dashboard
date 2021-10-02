import * as React from 'react';
import { MenuItemProps, Omit } from '@material-ui/core';
import { AdminUserType } from 'src/context/state';
import { UserRoleType } from 'type/globalTypes';

export interface IProps {
  isOnline?: boolean | undefined;
  onLogOut?: () => void;
  user?: IUser;
}

export interface IUser extends AdminUserType {
  avatar?: string | undefined;
  username: string | undefined;
  role: UserRoleType;
}

export interface IMenuItem extends Omit<MenuItemProps, 'component' | 'button'> {
  component?: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement>
  >;
  to?: string | undefined;
}
