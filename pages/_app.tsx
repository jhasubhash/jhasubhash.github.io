import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
  <div style={{height:'10px'}}/>
  <main className='container'>
  <Component {...pageProps} />
  </main>
  <Footer/>
  </>
}

export default MyApp
