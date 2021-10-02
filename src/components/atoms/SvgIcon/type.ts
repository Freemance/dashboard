export type IconColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | undefined;

export interface IProps {
  paths: string[];
  color?: IconColor;
  width?: number;
  height?: number;
  className?: string;
}
