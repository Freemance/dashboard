import React from 'react';
import {
  UserCheck,
  AlertTriangle,
  UserX,
  Clock,
  Crosshair,
} from 'react-feather';
import { ProfileStatus } from 'type/globalTypes';
// Styles
import useStatusTagStyles from './StatusTag.style';

interface IProps {
  status: ProfileStatus | string;
}

export const StatusTag = ({ status }: IProps) => {
  const classes = useStatusTagStyles({ status });
  return (
    <div className={classes.root}>
      {status === 'APPROVED' && <UserCheck />}
      {status === 'NEEDFIX' && <AlertTriangle />}
      {status === 'DISAPPROVED' && <UserX />}
      {status === 'PENDING' && <Clock />}
      {status === 'REVIEWING' && <Crosshair />}
    </div>
  );
};
