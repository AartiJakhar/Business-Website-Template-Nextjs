import styles from '../styles/Home.module.css'
import Team from '../components/page/Team';
import About from '../components/page/About';
import Blogs from '../components/page/Blogs';

export default function Home() {

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
              <a href="#">
                <i className={`fa fa-play ${styles.fa}`}></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      <About/>
      <Blogs/>
      <Team/>
    </>
  )
}
