import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContext } from './context';
import { CssBaseline } from '@material-ui/core';
import 'react-perfect-scrollbar/dist/css/styles.css';

// Providers
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

import { theme } from 'src/styles/theme';
import Routes from './Routes';
import './utils/locales/i18n';

export default function App() {
  const { state } = React.useContext(GlobalContext);
  console.log(state.system.theme);
  return (
    <ThemeProvider
      theme={
        state.system.theme === 'light' ? theme.lightTheme : theme.darkTheme
      }
    >
      <SnackbarProvider preventDuplicate>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
