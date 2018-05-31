import React from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import { ListItem } from 'react-md/lib/Lists';
import { FontIcon } from 'react-md/lib/FontIcons';

const NavLink = ({ label, to, exact, icon, shouldHide, requireAuth }) => (
  <Route path={to} exact={exact}>
    {({ match }) => {
      let leftIcon;
      if (icon) {
        leftIcon = <FontIcon>{icon}</FontIcon>;
      }

      if (shouldHide) {
        if (shouldHide()) return null;
      }

      if (requireAuth) {
        if (!localStorage.getItem('token')) {
          return null;
        }
      }

      return (
        <ListItem
          component={RouterLink}
          active={!!match}
          to={to}
          primaryText={label}
          leftIcon={leftIcon}
        />
      );
    }}
  </Route>
);

export default NavLink;
