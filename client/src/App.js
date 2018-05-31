import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md/lib/NavigationDrawers';
import { Switch, Route, matchPath } from 'react-router-dom';
import 'react-md/dist/react-md.deep_purple-deep_orange.min.css';

import './App.css';
import Loadable from './Loadable';

const AsyncHome = Loadable({
  loader: () => import('./Home')
});

const AsyncLogin = Loadable({
  loader: () => import('./Login')
});

const AsyncCreateRecipe = Loadable({
  loader: () => import('./CreateRecipe')
});

const AsyncRecipeList = Loadable({
  loader: () => import('./RecipeList')
});

const AsyncLogout = Loadable({
  loader: () => import('./Logout')
});

const AsyncRecipe = Loadable({
  loader: () => import('./Recipe')
});

const AsyncEditRecipe = Loadable({
  loader: () => import('./EditRecipe')
});

const NavLink = Loadable({
  loader: () => import('./NavLink')
});

const PrivateRoute = Loadable({
  loader: () => import('./PrivateRoute')
});

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
                <Route exact path="/" component={AsyncHome} />
                <Route path="/login" component={AsyncLogin} />
                <PrivateRoute
                  path="/new-recipe"
                  component={AsyncCreateRecipe}
                />
                <PrivateRoute
                  path="/recipes/:id/edit"
                  component={AsyncEditRecipe}
                />
                <PrivateRoute path="/recipes/:id" component={AsyncRecipe} />
                <PrivateRoute path="/recipes" component={AsyncRecipeList} />
                <Route path="/logout" component={AsyncLogout} />
              </Switch>
            </NavigationDrawer>
          )}
        />
      </div>
    );
  }
}

export default App;
