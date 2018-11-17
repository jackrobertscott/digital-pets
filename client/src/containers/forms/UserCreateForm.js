import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import gql from 'graphql-tag';
import client from '../../client';
import auth from '../../utils/auth';

export const mutation = gql`
  mutation($credentials: UserCredentials!) {
    userCreate(credentials: $credentials) {
      userId
      token
    }
  }
`;

export default class UserLoginForm extends Component {
  static propTypes = {
    emitAuthChange: PropTypes.func.isRequired,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      success: false,
      loading: false,
      error: null,
    };
  }

  handleSubmit = data => {
    this.setState({ error: null, loading: true });
    client
      .mutate({
        mutation,
        variables: {
          credentials: data,
        },
      })
      .then(({ data: { userCreate: { userId, token } = {} } = {} }) => {
        auth.set({ userId, token });
        this.props.emitAuthChange();
        this.setState({ success: true, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  render() {
    const { success, loading, error } = this.state;
    const initialValues = {
      username: '',
      password: '',
    };
    const validationSchema = Yup.object().shape({
      username: Yup.string()
        .trim()
        .required(),
      password: Yup.string()
        .trim()
        .required(),
    });
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
        render={({ touched, errors }) => (
          <Form>
            <h1>Create</h1>
            {success && <>Success</>}
            <>
              <Field type="text" name="username" placeholder="Username" />
              {touched.name && errors.name && <div>{errors.name}</div>}
            </>
            <>
              <Field type="password" name="password" placeholder="Password" />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}
            </>
            {error && <>{JSON.stringify(error)}</>}
            <button type="submit">{loading ? 'Loading...' : 'Save'}</button>
          </Form>
        )}
      />
    );
  }
}
