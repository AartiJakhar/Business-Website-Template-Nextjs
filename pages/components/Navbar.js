import Link from 'next/link';
import React ,{useState}from 'react'
// import Link from "next/link";
import styles from '../../styles/Navbar.module.css'
export default function Navbar() {
    const [dropdownToggled, setdropdownToggle] = useState(false);
    const navSlide = () => {
        if(!dropdownToggled){
           setdropdownToggle(true);
        console.log('first')
       }
    //    else{
    //     setdropdownToggle(false)
    //    }
      };

      if (typeof window !== "undefined") {
        window.onclick = function (event) {
            console.log(event.target.matches('#droptn'))
            if (!event.target.matches('#dropbtn')) {
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
              <Link href="/" className={styles.navlogo} >
                BLOG-VLOG
              </Link>
            </div>
            <div className={styles.navrow}>
              <nav>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#blogs">Blogs</a>
                    <a href="#team">Team</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.navburgur} id="dropbtn" onMouseOver={navSlide} >
              <div className={styles.line1}></div>
              <div className={styles.line2}></div>
              <div className={styles.line3}></div>
            </div>
          </div>

    </>

  )
}
