import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from 'src/utils/helpers/auth.helper';

// Tyepes
import { IProps } from './type';

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
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default RouteWithLayout;
