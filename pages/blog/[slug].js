import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import listContext from "../../context/ListContext";
import styles  from  '../../styles/ViewBlog.module.css'
export default function Blog() {
  function createMarkup(c) {
    return {__html: c};
  }
  const context = useContext(listContext);
  const { getBlog, getblog } = context;
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (slug !== undefined) {
      // const intSlug= parseInt(slug)
      if(getBlog.length ===0){
        getblog(slug)
      }
    }
  }, [slug]);

  return (
    <>
      {getBlog.length !== 0 &&
        getBlog.map((e) => {
          return  <div key={e.id}>
      <div  className={styles.view}>
      <Link className={styles.backArrow} href="/routes/blogs"  >&larr;</Link>
        <h1>{e.title}</h1>
        <div className={styles.publishBox}>
            <div className={styles.publisher}>
          <img src="https://images.unsplash.com/photo-1665107411141-a40f1ecea59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60" alt="BlogImage" />
          <p>{e.author}</p>

            </div>
          <p className={styles.pubDate}>Published: {e.date}</p>
        </div>
        <div className={styles.mainBox}>
        <p>
        {e.description}
        </p>
        <img src={e.ImageUrl} alt="img"/>
       {<div dangerouslySetInnerHTML={createMarkup(e.content)}></div>}
        {/* <a href="#">Grow Your Business With HubSpffot&apos;s Tools for WordPress Websites</a>
        <p>
        To help you get started with your forum framework, we’ve compiled a list of the 12 best WordPress forum themes and WordPress forum-compatible themes for you to choose from. Let’s go.
        </p>
     */}
        </div>
      </div>
    </div>
        })}
     

    </>
  );
}
