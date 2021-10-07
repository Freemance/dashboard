import { RouteComponentProps } from 'react-router-dom';

export type TParams = {
  id: string;
};
export interface IProps extends RouteComponentProps<TParams> {}
