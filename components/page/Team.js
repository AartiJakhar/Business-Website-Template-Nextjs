import React, { useContext } from 'react'
import Homeitem from '../../components/Homeitem'
import listContext from '../../context/ListContext'
import styles from '../../styles/Home.module.css'
export default function Team() {
    const context = useContext(listContext)
    const {data}=context 
  return (
    <section id='team'>
    <div className={styles.Container}>
      <div className={styles.row}>
        <div className={styles.leftBox}>
          <h2>Why Choose Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            sapiente aspernatur, incidunt qui, nihil alias laborum officiis
            nihil alias nihil alias laborum officiis nihil alias laborum
            officiis nihil alias laborum officiis nihil alias laborum
            officiis
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            sapiente aspernatur, incidunt qui, nihil alias laborum officiis
            expedita quisquam sequi ipsum beatae vitae a doloremque saepe
            repellat veniam amet, hic quam rerum pariatur! Error,
            repudiandae cumque quae velit adipisci nulla. nihil alias
            laborum officiis nihil alias laborum officiis nihil alias
            laborum officiis nihil alias laborum officiis
          </p>
        </div>
        <div className={styles.rightBox} >
        {data.map((element) => {
           return   <Homeitem key={element.id} title={element.title} description={element.description} logo={element.logo}/>
          })}
          </div>
      </div>
      {/* <About/> */}
    </div>
  </section>
  )
}
