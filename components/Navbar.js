import Link from 'next/link';
import React ,{useState}from 'react'
import styles from '../styles/Navbar.module.css'
import {useRouter} from 'next/router';
import Image from 'next/image';
export default function Navbar() {
  const router = useRouter();
 const {pathname}=router;
 
    const [dropdownToggled, setdropdownToggle] = useState(false);
    const navToggle=()=>{
      if(dropdownToggled){
        setdropdownToggle(false)
      }else{
        setdropdownToggle(true)
      }
    }
    

      if (typeof window !== "undefined") {
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName(styles.nav);
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains(`${styles.toggle}`)) {
                        console.log('first window')
                        openDropdown.classList.remove(`${styles.toggle}`);
                        setdropdownToggle(false)
                    }
                }
            }
        }
    }
  return (
    <>
   
   <div className={`${styles.nav} ${dropdownToggled? styles.toggle:""}`} >
            <div>
              <Link href="/"  >
              <Image src='/aarti.png' width={350} height={50} className={styles.navlogo}  alt="icon"></Image>
              </Link>
            </div>
            <div className={styles.navrow}>
            {pathname=== "/" ? 
              <nav>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#blogs">Blogs</a>
                    <a href="#team">Team</a>
                  </li>
                </ul>
              </nav>:

               <nav>
               <ul>
                 <li>
                   <Link href="/">Home</Link>
                   <Link href="/routes/about">About</Link>
                   <Link href="/routes/blogs">Blogs</Link>
                   <Link href="/routes/team">Team</Link>
                 </li>
               </ul>
             </nav>
              }
            </div>
            <div className={`${styles.navburgur} dropbtn`}   onClick={navToggle}  >
              <div className={`dropbtn ${styles.line1}`} onClick={navToggle}></div>
              <div className={`dropbtn ${styles.line2}`} onClick={navToggle}></div>
              <div className={`dropbtn ${styles.line3}`} onClick={navToggle}></div>
            </div>
          </div>

    </>

  )
}
