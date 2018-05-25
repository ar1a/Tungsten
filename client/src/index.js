import React from 'react';
import ReactDOM from 'react-dom';
import { Client, Provider } from 'urql';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new Client({
  url: 'http://localhost:4000/'
});

ReactDOM.render(
  <Provider client={client}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
