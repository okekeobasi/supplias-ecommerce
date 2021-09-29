import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../context/UserContext';

const PrivateRouter = ({ component: Component, ...rest }) => {
  const {
    state: { is_authenticated },
  } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        is_authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRouter;
