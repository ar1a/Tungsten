import React from 'react';
import { FormGroup, Intent, Button } from '@blueprintjs/core';
import { Form, Field, Formik } from 'formik';
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

export default () => (
  <Connect mutation={{ login: LOGIN_MUTATION }}>
    {({ login }) => (
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async ({ email, password }, actions) => {
          try {
            const data = await login({ email, password });
            window.localStorage.setItem('token', data.login.token);
            actions.setSubmitting(false);
          } catch (e) {
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
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <FormGroup
              label="Email"
              labelFor="email"
              helperText={touched.email && errors.email}
            >
              <Field type="email" name="email" className="pt-input" />
            </FormGroup>
            <br />
            <FormGroup
              label="Password"
              labelFor="password"
              helperText={touched.password && errors.password}
            >
              <Field type="password" name="password" className="pt-input" />
            </FormGroup>
            <br />
            {errors.form}
            {errors.form && <br />}
            <Button
              loading={isSubmitting}
              type="submit"
              intent={Intent.PRIMARY}
              text="Submit"
            />
          </Form>
        )}
      </Formik>
    )}
  </Connect>
);
