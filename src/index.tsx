import React from 'react';
import ReactDOM from 'react-dom';
import { AppTheme } from './contexts/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppTheme>
      <App />
    </AppTheme>
  </React.StrictMode>,
  document.getElementById('root'),
);
