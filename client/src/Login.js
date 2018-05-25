import React from 'react';
import { Form, Field, Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { Grid, Cell, Snackbar, Paper, TextField, Button } from 'react-md';
import * as Yup from 'yup';
import { mutation, Connect } from 'urql';
import clone from 'lodash/clone';

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

const renderTextField = ({ field, form: { touched, errors }, ...others }) => (
  <TextField
    {...field}
    {...others}
    onChange={(_, e) => field.onChange(e)}
    id={field.name}
    error={touched[field.name] && !!errors[field.name]}
    errorText={errors[field.name]}
  />
);

export default class Login extends React.Component {
  state = {
    toasts: []
  };
  addToast = (text, action) => {
    this.setState(state => {
      const toasts = clone(state.toasts);
      toasts.push({ text, action });
      return { toasts };
    });
  };

  dismissToast = () => {
    this.setState(state => {
      const [, ...toasts] = state.toasts;
      return { toasts };
    });
  };
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
                this.addToast(errors[0]);
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
            {({
              errors,
              touched,
              isSubmitting,
              handleChange,
              handleBlur,
              values
            }) => {
              if (window.localStorage.getItem('token')) {
                return <Redirect to="/" />;
              }
              return (
                <Form className="md-text-container">
                  <Grid>
                    <Cell size={12} desktopSize={8} desktopOffset={2}>
                      <Field
                        name="email"
                        label="Email"
                        component={renderTextField}
                      />
                    </Cell>
                    <Cell size={12} desktopSize={8} desktopOffset={2}>
                      <Field
                        name="password"
                        label="Password"
                        type="password"
                        component={renderTextField}
                      />
                    </Cell>
                    <Cell className="md-text-center" size={12}>
                      <Button raised primary type="submit">
                        Login
                      </Button>
                    </Cell>
                    <Snackbar
                      toasts={this.state.toasts}
                      autohide
                      onDismiss={this.dismissToast}
                    />
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        )}
      </Connect>
    );
  }
}
