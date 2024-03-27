import React from 'react';
import Layout from './components/layout/Layout';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo } from 'react';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#9d80d0',
        main: '#8561c5',
        dark: '#482880',
        contrastText: '#fff',
      },
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <Layout/>
    </ThemeProvider>
  );
}

export default App;
