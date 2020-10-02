import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import { AuthProvider } from './hooks/auth';
import * as themes from './styles/themes';
import useTheme from './contexts/theme';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  const { currentTheme } = useTheme();
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyles />
      <ToastContainer autoClose={5000} />
    </ThemeProvider>
  );
};
export default App;
