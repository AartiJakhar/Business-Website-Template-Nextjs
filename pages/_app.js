import '../styles/globals.css'
import Script from 'next/script'
import ListState from '../context/ListState'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 
  
function MyApp({ Component, pageProps }) {
  return  <>
  <ListState>
  <Script src="https://kit.fontawesome.com/720428d2c3.js" crossorigin="anonymous"></Script>
   <Navbar/>
   <Component {...pageProps}/>
   <Footer/>
   </ListState>
   </>  
}

export default MyApp
