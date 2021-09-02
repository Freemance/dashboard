import { ElementType } from 'react';
import { ButtonProps } from '@material-ui/core';
import { TUserRole } from 'src/utils/types';

export interface IProps extends ButtonProps {
  online: boolean;
  userRole: TUserRole | '';
  userName?: string | undefined;
  userAvatar?: string | undefined;
  component?: ElementType;
}
