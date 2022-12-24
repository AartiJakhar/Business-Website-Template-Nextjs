import '../styles/globals.css'
import Script from 'next/script'
import ListState from '../context/ListState'
import Navbar from '../components/Navbar'
 
  
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
