import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Client, Provider } from 'urql';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new Client({
  url: 'http://localhost:4000/',
  fetchOptions: () => {
    const token = window.localStorage.getItem('token');
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
    }
    return {};
  }
});

ReactDOM.render(
  <Provider client={client}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
