import * as React from 'react';
import clsx from 'clsx';
// Styles
import useSvgIconStyles from './SvgIcon.style';

// Type
import { IProps } from './type';

const Svgicon: React.FC<IProps> = ({
  paths,
  color = 'primary',
  width = 24,
  height = 24,
  className,
}: IProps) => {
  const classes = useSvgIconStyles({ color });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={clsx(classes.root, className)}
      width={width}
      height={height}
    >
      <g>
        {paths &&
          paths.length > 0 &&
          paths.map((d, index: number) => (
            <path d={d} key={`${d.slice(0, 6)}${index}`} />
          ))}
      </g>
    </svg>
  );
};

export default Svgicon;
