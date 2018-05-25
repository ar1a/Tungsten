import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
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

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const ScrollToTopWrapper = withRouter(ScrollToTop);

ReactDOM.render(
  <Provider client={client}>
    <Router>
      <ScrollToTopWrapper>
        <App />
      </ScrollToTopWrapper>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
