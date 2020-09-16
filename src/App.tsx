import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import * as themes from './styles/themes';
import useTheme from './contexts/theme';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  const { currentTheme } = useTheme();
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default App;
