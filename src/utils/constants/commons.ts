import { ProfileStatus } from 'type/globalTypes';

export const PROFILE_STATUS: StatusOption[] = [
  {
    value: 'APPROVED',
    label: 'Approved',
  },
  {
    value: 'DISAPPROVED',
    label: 'Disapproved',
  },
  {
    value: 'NEEDFIX',
    label: 'Need Fix',
  },
  {
    value: 'PENDING',
    label: 'Pending',
  },
  {
    value: 'REVIEWING',
    label: 'Reviewing',
  },
];

type StatusOption = {
  value: ProfileStatus;
  label: string;
};
