import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import theme from './theme';


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <CssBaseline />
            <App />
        </Router>
    </ThemeProvider>,
  document.querySelector('#root'),
);
