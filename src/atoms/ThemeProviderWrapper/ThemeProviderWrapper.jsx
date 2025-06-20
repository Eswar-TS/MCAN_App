import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';

const ThemeProviderWrapper = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default ThemeProviderWrapper;
