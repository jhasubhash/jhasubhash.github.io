import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider } from "styled-components"
import { useState } from 'react'
import { lightTheme, darkTheme, GlobalStyles } from "../config/themeConfig" 
import styled from "styled-components"


const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return <Wrapper>
  <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
  <GlobalStyles />
  <main className='container'>
  <Component {...pageProps} />
  </main>
  <Footer/>
  </ThemeProvider>
  </Wrapper>
}

export default MyApp
