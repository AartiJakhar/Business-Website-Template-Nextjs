import Router, { useRouter } from "next/router.js";
import React, { useState } from "react";
import ListContext from "./ListContext.js";

const ListState = (props) => {
  const [loading, setLoading] = useState(true);
const router=useRouter()
  const datas = [
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
  const blog = [
    {
      id: 111,
      logo:"icon fa fa-paint-brush fa-2x",
      title: "What is JavaScript and why it is used?",
      description:"Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites.",
      author:"Aarti Jakhar",
      date:"23-12-2022",
      ImageUrl:"https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      content:"tyled JSX is a CSS-in-JS library that lets you write encapsulated and scoped CSS to style your components. The styles you make for one component won't impact other's features. Allowing you to add",
      slug:"What-is-JavaScript-and-why-it-is-used"
    },
    {
      id: 112,
      logo:"icon fa fa-desktop fa-2x",
      title: "what is jsx styling in next js?",
      description:
        "Styled JSX is a CSS-in-JS library that lets you write encapsulated and scoped CSS to style your components. The styles you make for one component won't impact other's features. Allowing you to add",
        author:"Aarti Jakhar",
        date:"23-12-2022",
        ImageUrl:"https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        content:"tyled JSX is a CSS-in-JS library that lets you write encapsulated and scoped CSS to style your components. The styles you make for one component won't impact other's features. Allowing you to add",
        slug:"what-is-jsx-styling-in-next-js"
    },
    {
      id: 113,
      logo:"icon fa fa-diamond fa-2x",
      title: "what is server side rendering in next js?",
      description:
        "Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page. Static Generation (Recommended): The HTML is generated at build time and will be reused on each request. Server-side Rendering: The HTML is generated on each request.",
        author:"Aarti Jakhar",
        date:"23-12-2022",
        ImageUrl:"https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        content:"tyled JSX is a CSS-in-JS library that lets you write encapsulated and scoped CSS to style your components. The styles you make for one component won't impact other's features. Allowing you to add",
        slug:"what-is-server-side-rendering-in-next-js"
    },
    {
      id: 114,
      logo:"icon fa fa-check-circle fa-2x",
      title: "What is static rendering?",
      description:
        "Generally, static rendering means producing a separate HTML file for each URL ahead of time. With HTML responses being generated in advance, static renders can be deployed to multiple CDNs to take advantage of edge-caching.",
        author:"Aarti Jakhar",
        date:"23-12-2022",
        ImageUrl:"https://plus.unsplash.com/premium_photo-1666343850739-a59dba761b3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        content:"tyled JSX is a CSS-in-JS library that lets you write encapsulated and scoped CSS to style your components. The styles you make for one component won't impact other's features. Allowing you to add",
        slug:"What-is-static-rendering"
    },
  ];
    const [blogs, setBlogs] = useState(blog)
    const [getBlog, setgetBlog] = useState([])
    const [data, setdata] = useState(datas)
  
const getblog=async(slug)=>{
  
  router.push(`/blog/${slug}`)
  const newData= blogs.filter((value)=>{return value.slug === slug})
  setgetBlog(newData)
  console.log(blogs)
  console.log(newData)

}
  return (
    <ListContext.Provider
      value={{
       loading,
       blogs,
       data,
       getblog,
       getBlog
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
