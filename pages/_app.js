import '../styles/globals.css'
import Navbar from './components/Navbar'
import Script from 'next/script'
 
  
function MyApp({ Component, pageProps }) {
  return<><Script src="https://kit.fontawesome.com/720428d2c3.js" crossorigin="anonymous"></Script> <Navbar/><Component {...pageProps}/></>  
}

export default MyApp
