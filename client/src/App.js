import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';
import { Switch, Route, matchPath } from 'react-router-dom';
import 'react-md/dist/react-md.deep_purple-deep_orange.min.css';

import CreateRecipe from './CreateRecipe';
import RecipeList from './RecipeList';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import NavLink from './NavLink';
import PrivateRoute from './PrivateRoute';
import './App.css';
import Recipe from './Recipe';

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
    title: 'Login',
    shouldHide: () => window.localStorage.getItem('token')
  },
  {
    label: 'Create new Recipe',
    to: '/new-recipe',
    icon: 'add',
    title: 'New Recipe',
    requireAuth: true,
    shouldHide: () => true
  },
  {
    label: 'Recipes',
    exact: true,
    to: '/recipes',
    icon: 'list',
    title: 'Recipes',
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
  getTitle = path => {
    const match = navItems.find(x =>
      matchPath(path, { path: x.to, exact: x.exact })
    );
    return (match && match.title) || 'Tungsten';
  };
  render() {
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <NavigationDrawer
              toolbarTitle={this.getTitle(location.pathname)}
              drawerTitle="Tungsten"
              navItems={navItems.map(props => (
                <NavLink {...props} key={props.to} />
              ))}
            >
              <Switch key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/new-recipe" component={CreateRecipe} />
                <PrivateRoute path="/recipes/:id" component={Recipe} />
                <PrivateRoute path="/recipes" component={RecipeList} />
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
