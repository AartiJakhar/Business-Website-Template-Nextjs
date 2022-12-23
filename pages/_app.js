import '../styles/globals.css'
import Navbar from './components/Navbar'
import Script from 'next/script'
import ListState from '../context/ListState'
 
  
function MyApp({ Component, pageProps }) {
  return  <>
  <ListState>
  <Script src="https://kit.fontawesome.com/720428d2c3.js" crossorigin="anonymous"></Script>
   <Navbar/>
   <Component {...pageProps}/>
   </ListState>
   </>  
}

export default MyApp
