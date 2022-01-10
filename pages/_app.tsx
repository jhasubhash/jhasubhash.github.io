import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider } from "styled-components"
import { useState } from 'react'
import { lightTheme, darkTheme, GlobalStyles } from "../config/themeConfig" 

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return <>
  <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
  <GlobalStyles />
  <Header toggleTheme={toggleTheme}/>
  <main className='container'>
  <Component {...pageProps} />
  </main>
  <Footer/>
  </ThemeProvider>
  </>
}

export default MyApp
