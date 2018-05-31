import React from 'react';
import { CircularProgress } from 'react-md';

export default ({ error, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error! <button onClick={retry}>Retry</button>
      </div>
    );
  } else if (pastDelay) {
    return <CircularProgress id="loading-page" />;
  }
  return null;
};
