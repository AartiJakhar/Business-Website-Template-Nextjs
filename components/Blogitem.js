import React from 'react'
import styles from "./styles/Blogitem.module.css"
function Blogitem() {
  return (
    <div className={styles.card}>
        <div className={styles.postImage}>
        <div className={styles.postDate}>18<span>may</span></div>
        <img src="https://demo.gecdesigns.com/demo/webs/creative-business-website-template-130819/img/hero-03.jpg" alt=""/>
        
        </div>
        <div className={styles.postItem}>
            <h2>5 Best Responsive Web Design Practices</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima placeat aut obcaecati iusto qui.</p>
            <button className={styles.postBtn}>Read More <i className={`${styles.fa} fa fa-long-arrow-right`}></i></button>
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