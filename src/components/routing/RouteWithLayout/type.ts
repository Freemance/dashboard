import { FunctionComponent } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

export interface IProps extends Omit<RouteProps, 'component'> {
  component: FunctionComponent<RouteComponentProps>;
  layout: FunctionComponent;
  path?: string;
}
