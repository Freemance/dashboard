import { SkillType } from 'src/context/state';

export interface IProps extends Omit<SkillType, 'svgPath'> {
  onSelect: (id: number) => void;
  onDelete: (id: number) => void;
  deleting: boolean;
}
