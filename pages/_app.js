import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Layout from "../src/layouts/Layout";
import "../src/styles/global.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/components/GlobalStyles";
import { lightTheme, darkTheme } from "../src/components/Themes";
import useDarkMode from "../src/components/useDarkMode";
import Toggler from "../src/components/Toggler";
import { ApolloProvider } from "@apollo/client";
import client from "../src/lib/apolloClient";


function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />

        <Layout>
          <Toggler theme={theme} toggleTheme={themeToggler} />
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Layout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
