import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import UserLoginForm from '../forms/UserLoginForm';
import UserCreateForm from '../forms/UserCreateForm';

const AuthRoutes = ({ ...props }) => (
  <>
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
    <Switch>
      <Route
        path="/register"
        component={args => <UserCreateForm {...args} {...props} />}
      />
      <Route
        path="/login"
        component={args => <UserLoginForm {...args} {...props} />}
      />
      <Redirect to="/login" />
    </Switch>
  </>
);

AuthRoutes.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

AuthRoutes.defaultProps = {
  user: null,
};

export default AuthRoutes;
