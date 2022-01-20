import { Box, Container, CssBaseline } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import App from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { SWRConfig } from 'swr';
import Navbar from '../components/navbar/Navbar';

import '../styles/globals.css';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <SWRConfig
        value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
      >
        <Component {...pageProps} />;
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;
