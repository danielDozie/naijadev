import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../layouts/Layout'
import '../styles/global.css'

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyles";
import { lightTheme, darkTheme } from "./components/Themes"
import  {useDarkMode} from "./components/useDarkMode"
import Toggler from './components/Toggler'

function MyApp({ Component, pageProps }) {
  
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
  <ThemeProvider theme={themeMode}>
    <>
  <GlobalStyles/>
  <Layout>
    <Component {...pageProps} />
    <Toggler theme={theme} toggleTheme={themeToggler} />
  </Layout>

    </>
    </ThemeProvider>)
}

export default MyApp
