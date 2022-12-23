import styles from '../styles/Home.module.css'
import { useState,useContext } from "react";
import About from "./components/about";
import Blogs from './components/blogs';
import listContext from '../context/ListContext'
import Team from './components/team';

export default function Home() {
  const context = useContext(listContext)
  const {loading,data}=context 

  return (
    <>
     <header id='home'>
        <div className={styles.Topcontainer}>
          <div>
            <div className={styles.mainrow}>
              <h3>Digital Agency</h3>
              <h1>Grow your Business with us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                vel aut animi quam ducimus consequatur voluptas delectus,
                sapiente.
              </p>
              <a className={styles.btn}  href="#about">
                More About →
              </a>
              <a href="#0">
                <i className={`fa fa-play ${styles.fa}`}></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      <Team/>
      <Blogs/>
      <About/>
    </>
  )
}
