import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../layouts/Layout'
import '../styles/global.css'

import {ThemeProvider} from "styled-components";
import  GlobalStyles  from "../pages/components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import  useDarkMode from "./components/useDarkMode";
import Toggler from './components/Toggler';

function MyApp({ Component, pageProps }) {
  
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
  <ThemeProvider theme={themeMode}>
    <>
  <GlobalStyles/>
  <Layout>
    <Toggler theme={theme} toggleTheme={themeToggler} />
    <Component {...pageProps} />
  </Layout>

    </>
    </ThemeProvider>)
}

export default MyApp;
