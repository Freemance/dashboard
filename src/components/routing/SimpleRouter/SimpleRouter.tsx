import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from 'src/utils/helpers/auth.helper';

// Types
import { IProps } from './type';

const SimpleRouter: React.FC<IProps> = ({
  component: Component,
  ...rest
}: IProps) => {
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        !isAuthenticated() ? (
          <Component {...matchProps} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};

export default SimpleRouter;
