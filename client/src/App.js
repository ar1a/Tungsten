import React, { Component } from 'react';
import './App.css';
import { Spinner } from '@blueprintjs/core';
import { FocusStyleManager } from '@blueprintjs/core';

// http://blueprintjs.com/docs/v2/#core/accessibility
FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Spinner />
      </div>
    );
  }
}

export default App;
