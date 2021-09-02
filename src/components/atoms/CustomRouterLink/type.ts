import { ReactNode } from 'react';

export interface IRouterProps {
  children?: ReactNode | undefined;
  to: string | undefined;
}
