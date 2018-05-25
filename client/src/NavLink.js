import React from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';

const NavLink = ({ label, to, exact, icon, shouldHide }) => (
  <Route path={to} exact={exact}>
    {({ match }) => {
      let leftIcon;
      if (icon) {
        leftIcon = <FontIcon>{icon}</FontIcon>;
      }

      if (shouldHide) {
        if (shouldHide()) return null;
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
