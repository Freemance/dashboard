import { ProfileType, UserType } from 'src/context/state';

export interface IProps {
  user: UserType;
  profile: ProfileType;
  onRefetch: () => void;
}

export type StatusOptionType = {
  label: string;
  value: string;
};
