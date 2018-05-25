import React from 'react';
import { ConnectHOC } from 'urql';

class Logout extends React.Component {
  async componentDidMount() {
    await this.props.cache.invalidateAll();
    window.localStorage.removeItem('token');
    await this.props.refreshAllFromCache();
    this.props.history.replace('/'); // Redirect
  }

  render() {
    return null;
  }
}

export default ConnectHOC()(Logout);
