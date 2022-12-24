import Link from 'next/link'
import React from 'react'
import styles from "../../styles/About.module.css"
//changing the file name's first letter to small to solve  build  problem
export default function About() {
  return (
    <div id='about'>
           <div className={styles.container}>
      <div className={styles.Row}>
        <div className={styles.img}>
          <img src="https://demo.gecdesigns.com/demo/webs/creative-business-website-template-130819/img/about.png" alt="" />
        
        </div>
        <div className={styles.box}>
          <h2>About Us</h2>
          <h3>Who We Are</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel aut animi quam ducimus consequatur voluptas delectus, sapiente, explicabo nam quasi! Corporis ipsum quae repellendus molestias a quaerat recusandae similique!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem suscipit ex quasi in iure dolorem cupiditate corrupti ducimus ipsa.</p>
          <Link href={'/routes/about'} className={styles.btn} >READ MORE →</Link>
        </div>
      </div>
    </div>
    </div>
  )
}
