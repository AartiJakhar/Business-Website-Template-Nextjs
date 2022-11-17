import Navbar from "./components/Navbar";
import styles from '../styles/Home.module.css'
import { useState } from "react";
import Homeitem from "../components/Homeitem"; 
import About from "./components/About";


export default function Home() {
  const blogs = [
    {
      id: 111,
      logo:"icon fa fa-paint-brush fa-2x",
      title: "Strategy & Research",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. error at velit quos.",
    },
    {
      id: 112,
      logo:"icon fa fa-desktop fa-2x",
      title: "Management & Marketing",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. error at velit quos.",
    },
    {
      id: 113,
      logo:"icon fa fa-diamond fa-2x",
      title: "Design & Developement",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. error at velit quos.",
    },
    {
      id: 114,
      logo:"icon fa fa-check-circle fa-2x",
      title: "Analysing &Checking",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. error at velit quos.",
    },
  ];
  const [data, setData] = useState(blogs);
  return (
    <>
     <header>
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
              <a className={styles.btn}  href="/">
                More About →
              </a>
              <a href="#0">
                <i className={`fa fa-play ${styles.fa}`}></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      <section>
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
              </div>;
          </div>
          {/* <About/> */}
        </div>
      </section>
      <About/>
    </>
  )
}
