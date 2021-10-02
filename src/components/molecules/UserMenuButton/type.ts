import { ElementType } from 'react';
import { ButtonProps } from '@material-ui/core';
import { UserRoleType } from 'type/globalTypes';

export interface IProps extends ButtonProps {
  online: boolean;
  userRole: UserRoleType | '';
  userName?: string | undefined;
  userAvatar?: string | undefined;
  component?: ElementType;
}
