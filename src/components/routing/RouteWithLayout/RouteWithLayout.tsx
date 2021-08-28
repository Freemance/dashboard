import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

// import { isAuthenticated } from 'src/utils/helpers';

// Tyepes
import { IProps } from './type';

// Mock IsAuth
const isAuthenticated = (): boolean => true;

const RouteWithLayout: React.FC<IProps> = ({
  layout: Layout,
  component: Component,
  ...rest
}: IProps) => {
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        isAuthenticated() ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
};

export default RouteWithLayout;
