import React, { useState } from 'react'
import styles from './styles/Homeitem.module.css'

function Homeitem(props) {
  const [cardtoggle, setcardtoggle] = useState(false)
    const cardHover = ()=>{
      setcardtoggle(true);
    }
  
  return (
    <>
        <div className={styles.card} id="cardContainer" onMouseOver={()=>{setcardtoggle(true)}} onMouseOut={()=>{setcardtoggle(false)}}>
             <i className={`${props.logo} ${styles.fa} ${cardtoggle?styles.toggle:"" }`}></i>
             <h2>{props.title}</h2>
           <p>{props.description}</p>
        </div>
    </>
  )
}

export default Homeitem