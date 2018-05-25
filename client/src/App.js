import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';
import { Switch, Route } from 'react-router-dom';
import 'react-md/dist/react-md.deep_purple-deep_orange.min.css';

import Login from './Login';
import Logout from './Logout';
import CreateRecipe from './CreateRecipe';
import Home from './Home';
import NavLink from './NavLink';
import './App.css';

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
    label: 'Create new Recipe',
    to: '/new-recipe',
    icon: 'add',
    requireAuth: true
  },
  {
    label: 'Logout',
    to: '/logout',
    icon: 'exit_to_app',
    requireAuth: true
  }
];

class App extends Component {
  render() {
    return (
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
                <Route path="/login" component={Login} />
                <Route path="/new-recipe" component={CreateRecipe} />
                <Route path="/logout" component={Logout} />
              </Switch>
            </NavigationDrawer>
          )}
        />
      </div>
    );
  }
}

export default App;
