import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import Product from '../pages/dashboard/products';
import { supabase } from '../server/supabase';
import AuthRouter from './auth-router';
import PrivateRouter from './private-router';

const AppRouter = () => {
  const { save } = useContext(UserContext);

  useEffect(() => {
    const session = supabase.auth.session();
    if (session?.user) save(session?.user);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        if (currentUser) save(currentUser);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <AuthRouter exact path="/" component={Login} />
        <AuthRouter exact path="/auth/login" component={Login} />
        <AuthRouter exact path="/auth/signup" component={Signup} />
        <PrivateRouter exact path="/dashboard/" component={Product} />
        <PrivateRouter exact path="/dashboard/products" component={Product} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
