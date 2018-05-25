import React, { Component } from 'react';
import { FocusStyleManager } from '@blueprintjs/core';
import { query, Connect } from 'urql';
import Login from './Login';
import './App.css';

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

class App extends Component {
  render() {
    return (
      <Connect query={query(HOME_QUERY)}>
        {({ data }) => (
          <div className="App">
            {data && data.me && data.me.email}
            <Login />
          </div>
        )}
      </Connect>
    );
  }
}

export default App;
