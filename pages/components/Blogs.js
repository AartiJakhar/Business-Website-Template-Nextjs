import React from 'react'
import Blogitem from '../../components/Blogitem'
import styles from '../../styles/Blog.module.css'
function Blogs() {
  return (
    <div id="blogs">
        <div className={styles.container} >
            <div className={styles.top}>
        <h2>Our Blog</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores! Iure perspiciatis, minus modi ratione est maiores. Perferendis, porro aperiam.</p>
            </div>
            <div className={styles.main}>
             <Blogitem/>
             <Blogitem/>
             <Blogitem/>
             <Blogitem/>
             <Blogitem/>
             <Blogitem/>
            </div>
            
        </div>
    </div>
  )
}

export default Blogs