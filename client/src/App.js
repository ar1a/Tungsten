import React, { Component } from 'react';
import { query, Connect } from 'urql';
import { NavigationDrawer } from 'react-md';
import { Switch, Route } from 'react-router-dom';
import 'react-md/dist/react-md.deep_purple-light_green.min.css';

import Login from './Login';
import Logout from './Logout';
import Home from './Home';
import NavLink from './NavLink';
import './App.css';

const HOME_QUERY = `
{
  me {
    email
    name
    id
  }
}
`;

const navItems = [
  {
    exact: true,
    label: 'Home',
    to: '/',
    icon: 'home'
  },
  {
    label: 'Login',
    to: '/login',
    icon: 'people',
    shouldHide: () => window.localStorage.getItem('token')
  },
  {
    label: 'Logout',
    to: '/logout',
    icon: 'exit_to_app',
    shouldHide: () => !window.localStorage.getItem('token')
  }
];

class App extends Component {
  state = {
    redraw: 0
  };
  render() {
    return (
      <Connect query={query(HOME_QUERY)}>
        {({ data, refetch }) => (
          <div className="App">
            <Route
              render={({ location }) => (
                <NavigationDrawer
                  drawerTitle="Tungsten"
                  toolbarTitle="Tungsten"
                  navItems={navItems.map(props => (
                    <NavLink {...props} key={props.to} />
                  ))}
                >
                  <Switch key={location.pathname}>
                    <Route exact path="/" component={Home} />
                    <Route
                      path="/login"
                      render={props => <Login {...props} />}
                    />
                    <Route
                      path="/logout"
                      render={props => <Logout {...props} />}
                    />
                  </Switch>
                </NavigationDrawer>
              )}
            />
          </div>
        )}
      </Connect>
    );
  }
}

export default App;
