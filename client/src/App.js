import React, { Component } from 'react';
import { FocusStyleManager } from '@blueprintjs/core';
import { query, mutation, Connect } from 'urql';

// http://blueprintjs.com/docs/v2/#core/accessibility
FocusStyleManager.onlyShowFocusOnTabs();

const HOME_QUERY = `
{
  me {
    email
    id
  }
}
`;

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

class App extends Component {
  render() {
    return (
      <Connect query={query(HOME_QUERY)} mutation={{ login: LOGIN_MUTATION }}>
        {({ data, loaded, ...rest }) => {
          console.log(data, loaded, rest);
          return <div className="App">Hello</div>;
        }}
      </Connect>
    );
  }
}

export default App;
