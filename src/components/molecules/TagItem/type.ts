import { TagType } from 'src/context/state';

export interface IProps extends TagType {
  onSelect: (id: number) => void;
  onDelete: (id: number) => void;
  deleting?: boolean;
}
