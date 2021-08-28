/* eslint-disable react/display-name */
import * as React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

// Types
import { IRouterProps } from './type';

const CustomRouterLink = React.forwardRef<HTMLDivElement>(
  ({ ...props }: IRouterProps, ref) => (
    <div ref={ref}>
      <RouterLink {...props} />
    </div>
  )
);

export default CustomRouterLink;
