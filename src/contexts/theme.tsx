import React, { useState, useContext, createContext, useCallback } from 'react';

type ThemeState = 'light' | 'dark';

export type IThemeContext = {
  currentTheme: ThemeState;
  toggleTheme(): void;
};

const AppThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const AppTheme: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeState>('light');

  const toggleTheme = useCallback(() => {
    setCurrentTheme(oldTheme => {
      return oldTheme === 'light' ? 'dark' : 'light';
    });
  }, [setCurrentTheme]);

  return (
    <AppThemeContext.Provider
      value={{
        currentTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppThemeContext.Provider>
  );
};

const useTheme = (): IThemeContext => {
  const context = useContext(AppThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

export default useTheme;
