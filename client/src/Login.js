import React from 'react';
import { Form, Field, Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { mutation, Connect } from 'urql';

const LOGIN_MUTATION = mutation(`
mutation ($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      name
    }
  }
}
`);

export default class Login extends React.Component {
  render() {
    return (
      <Connect mutation={{ login: LOGIN_MUTATION }}>
        {({ login, cache: { invalidateAll } }) => (
          <Formik
            initialValues={{
              email: 'aria@ar1as.space',
              password: 'nooneknows'
            }}
            onSubmit={async ({ email, password }, actions) => {
              try {
                const data = await login({ email, password });
                window.localStorage.setItem('token', data.login.token);
                actions.setSubmitting(false);
                await invalidateAll();
              } catch (e) {
                console.log(e);
                const errors = e.graphQLErrors.map(err => err.message);
                actions.setErrors({ form: errors });
                actions.setSubmitting(false);
              }
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Invalid email address')
                .required('Email is required!'),
              password: Yup.string().required('Password is required!')
            })}
          >
            {({ errors, touched, isSubmitting }) => {
              if (window.localStorage.getItem('token')) {
                return <Redirect to="/" />;
              }
              return (
                <Form>
                  <Field type="email" name="email" className="pt-input" />
                  <br />
                  <Field type="password" name="password" className="pt-input" />
                  <br />
                  {errors.form}
                  {errors.form && <br />}
                  <button type="submit">Submit</button>
                </Form>
              );
            }}
          </Formik>
        )}
      </Connect>
    );
  }
}
