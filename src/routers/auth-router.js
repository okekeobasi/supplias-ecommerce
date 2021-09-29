import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../context/UserContext';

const AuthRouter = ({ component: Component, ...rest }) => {
  const {
    state: { is_authenticated },
  } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        is_authenticated ? (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthRouter;
