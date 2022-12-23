import React, { useContext } from 'react'
import Blogitem from '../Blogitem'
import styles from '../../styles/Blog.module.css'
import listContext from '../../context/ListContext'
export default function Blogs() {
  const context = useContext(listContext)
  const {loading,blogs}=context 
  return (
    <div id="blogs">
        <div className={styles.container} >
            <div className={styles.top}>
        <h2>Our Blog</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores! Iure perspiciatis, minus modi ratione est maiores. Perferendis, porro aperiam.</p>
            </div>
            <div className={styles.main}>
              {blogs.length!==0 && blogs.map((element)=>{
                return  <Blogitem key={element.id} element={element} />
              })}
            
            </div>
            
        </div>
    </div>
  )
}
