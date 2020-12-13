import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest}) => {
  const auth = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/not-found",
              state: { referrer: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute
