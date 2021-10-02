export interface IProps extends Dimension {
  onUpload: (icon: string[], svgPath: string) => void;
}

export type Dimension = {
  width?: number;
  height?: number;
  svgPath?: string;
};
