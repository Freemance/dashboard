import { FunctionComponent } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

export interface IProps extends RouteProps {
  component: FunctionComponent<RouteComponentProps>;
  path?: string;
}
