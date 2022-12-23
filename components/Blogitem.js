import React, { useContext } from 'react'
import listContext from '../context/ListContext'
import styles from "./styles/Blogitem.module.css"
function Blogitem({element}) {
  const context = useContext(listContext)
  const {getblog}=context 
  return (
    <div className={styles.card}>
        <div className={styles.postImage}>
        <div className={styles.postDate}>18<span>may</span></div>
        <img src="https://demo.gecdesigns.com/demo/webs/creative-business-website-template-130819/img/hero-03.jpg" alt=""/>
        
        </div>
        <div className={styles.postItem}>
            <h2>{element.title}</h2>
            <p>{element.description.length>100 ? element.description.slice(0,100):element.description}</p>
            <button className={styles.postBtn} onClick={()=>{getblog(element.slug)}}>Read More <i className={`${styles.fa} fa fa-long-arrow-right`}></i></button>
        </div>
        <div className={styles.postFooter}>
            <li>
            <i className={`fa fa-tags`}></i>
            <span>User Expreience</span>
            </li>
            <li>
            <i className={` fa fa-book`}></i>
            <span>3 mins read</span>
            </li>
            <li>
            <i className={`fa fa-comments`}></i>
            <span>8</span>
            </li>
             
        </div>
    </div>
  )
}

export default Blogitem