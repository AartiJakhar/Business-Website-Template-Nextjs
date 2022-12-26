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
      content:"<p>JavaScript is a lightweight, interpreted, object-oriented, Multi paradigm and flexible programming language.JavaScript can <strong>calculate<\/strong>,&nbsp;<strong>manipulate<\/strong>&nbsp;and&nbsp;<strong>validate<\/strong>&nbsp;data. The programs in this language are called&nbsp;scripts.<\/p> <p>Scripts are plain text and don&rsquo;t need special preparation to run. When JavaScript was created, it initially had another name, i.e. &ldquo;LiveScript&rdquo;. But Java was very popular at that time, so it was named &ldquo;JavaScript&rdquo;.<\/p> <p><strong>JavaScript Engine<\/strong><\/p> <p>Each browser has its own JavaScript engine which is used to support the JavaScript scripts in order for them to work properly. The basic job of a javascript engine is to take the javascript code, then convert it into a fast, optimized code that can be interpreted by a browser. Below are the names of the JavaScript engines used in some of the most popular browsers out there.<\/p> <ul> <li>Chrome: V8<\/li> <li>Firefox: SpiderMonkey<\/li> <li>Safari: JavaScriptCore<\/li> <li>Microsoft Edge\/ Internet Explorer: Chakra\/ChakraCore<\/li> <\/ul> <p><strong>Dynamic Typing<\/strong>: The interpreter figures out the type of the variable dynamically based on certain conditions.&nbsp;<strong>Primitive Data Types<\/strong>: The primitive data types are the data types that have no methods attached to it i.e. some defined methods cannot be used with them and they are used in isolation. Though there are ways to use those methods by wrapping these primitive data type variables (covered in the next article). The following are the data types that come under the primitive category:<\/p> <ol> <li><strong>undefined:<\/strong> If a variable exists but is not defined then it is categorized under undefined.<\/li> <li><strong>null:<\/strong> If a variable exists but is not explicitly set then it comes under null category.<\/li> <li><strong>boolean:<\/strong>&nbsp;Boolean represents a logical entity and can have two values: true, and false.<\/li> <li><strong>number:<\/strong> The number is the data type to define a number which can be integer, floating-point, or double. The only problem here is that we have to allocate a memory equivalent to a double variable every time we define a number.<\/li> <li><strong>string:<\/strong>&nbsp;This is used to define string values of a character.<\/li> <li><strong>symbol:<\/strong> This is a special data type that is new in ECMA Script 6. The data type &ldquo;symbol&rdquo; is a primitive data type having the quality that values of this type can be used to make object properties that are anonymous.<\/li> <\/ol> <p><strong>Object:<\/strong> Everything in JavaScript is an object. That is each variable, string, array or any other structure that we know comes under the category of object. Java Script objects can be understood in almost every language and are easy to read. <strong>Creating objects:<\/strong>&nbsp;There are 4 ways to create objects:<\/p> <p>&nbsp;<strong>1. Creating an object with a constructor<\/strong><\/p> <p><strong>2. Using Object literal&nbsp;<\/strong><\/p> <p><strong>3. Creating object with Object.create() method<\/strong><\/p> <p><strong>4. Using es6 classes<\/strong><\/p>",
      slug:"What-is-JavaScript-and-why-it-is-used"
    },
    {
      id: 112,
      logo:"icon fa fa-desktop fa-2x",
      title: "what is jsx styling in next js?",
      description:
        "SStyled JSX is a CSS-in-JS library that allows you to write encapsulated and scoped CSS to style your components. The styles you introduce for one component won't affect other components, allowing you to add, change and delete styles without worrying about unintended side effects.",
        author:"Aarti Jakhar",
        date:"23-12-2022",
        ImageUrl:"https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        content:"<p>Next.js includes Styled JSX by default so you can just start with&nbsp; adding a<br \/><code class=\"jsx-eca01b89ea5fd04 \">&lt;style jsx&gt;<\/code>&nbsp;tag into an existing React element and writing CSS inside of it<\/p> <p class=\"jsx-3304e3efe243f919\">we can include styles for the component's container element and a paragraph. Even though we are using generic selectors, the styles don't affect elements with the <code class=\"jsx-eca01b89ea5fd04 \">container<\/code>&nbsp;class name or&nbsp;<code class=\"jsx-eca01b89ea5fd04 \">&lt;p&gt;<\/code>&nbsp;tags in other components. This is because Styled JSX ensures the styles are scoped to this component only (by applying additional unique class names to styled elements).<\/p> <p class=\"jsx-3304e3efe243f919\">By adding just a single&nbsp;<code class=\"jsx-eca01b89ea5fd04 \">jsx<\/code>&nbsp;attribute to a&nbsp;<code class=\"jsx-eca01b89ea5fd04 \">&lt;style&gt;<\/code>&nbsp;element, you can write standard CSS that gets auto prefixed and automatically scoped to the component.&nbsp;<code class=\"jsx-eca01b89ea5fd04 \">&lt;style jsx&gt;<\/code>&nbsp;elements should be placed inside the root element of the component.<\/p> <h2 class=\"lean jsx-40c4e60c5843ba9c fw7\" data-components-heading=\"true\"><a class=\"jsx-b357a4faf5484e2\" href=\"https:\/\/nextjs.org\/blog\/styling-next-with-styled-jsx#adding-global-styles\">Adding global styles<\/a><\/h2> <p>Most projects need some global styles to style the body element or provide css resets. Styled JSX allows us to add global styles using&nbsp;<code class=\"jsx-eca01b89ea5fd04 \">&lt;style jsx global&gt;<\/code>.<\/p> <p class=\"jsx-3304e3efe243f919\">To apply global styles to all pages in our app, a good approach is to first create a layout component with the global styles, then wrap all pages with it.<\/p> <p class=\"jsx-3304e3efe243f919\">Using a layout component provides the flexibility to apply a certain set of styles to some pages while still allowing a different style for others<\/p> <p class=\"jsx-3304e3efe243f919\">In Next.js, we can load the layout once for all pages by creating a custom&nbsp;<a class=\"jsx-e1a61cccdd3dcd9d\" href=\"https:\/\/nextjs.org\/docs#custom-app\" target=\"_blank\" rel=\"noopener noreferrer\"><code class=\"jsx-eca01b89ea5fd04 \">App<\/code>&nbsp;component<\/a>&nbsp;within&nbsp;<code class=\"jsx-eca01b89ea5fd04 \">pages\/_app.js<\/code>, importing the&nbsp;<code class=\"jsx-eca01b89ea5fd04 \">Layout<\/code>&nbsp;component, and then adding it to the render method<\/p> <h3 class=\"lean jsx-d4cfbafdc3f90989 fw7\" data-components-heading=\"true\"><a class=\"jsx-b357a4faf5484e2\" href=\"https:\/\/nextjs.org\/blog\/styling-next-with-styled-jsx#writing-styles-in-external-files\">Writing styles in external files<\/a><\/h3> <p class=\"jsx-3304e3efe243f919\">We can also write styles in external files outside of the component.<\/p> <p class=\"jsx-3304e3efe243f919\">For example, we can move our global styles from the&nbsp;<code class=\"jsx-eca01b89ea5fd04 \">Layout<\/code> component into a separate file.<code class=\"language-js\"> <\/code><\/p>",
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
        ImageUrl:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        content:"<div class=\"\"> <h1 id=\"adad\" class=\"pw-post-title hg hh hi hj b hk hl hm hn ho hp hq hr hs ht hu hv hw hx hy hz ia ib ic id ie bi\" data-selectable-paragraph=\"\">Server-Side Rendering With Next.js<\/h1> <\/div> <figure class=\"eu ew ig ih ii ij eq er paragraph-image\"> <div class=\"eq er if\"><picture><source srcset=\"https:\/\/miro.medium.com\/max\/640\/1*hhfRKbHBgeJ7HH6CqQclFw.webp 640w, https:\/\/miro.medium.com\/max\/720\/1*hhfRKbHBgeJ7HH6CqQclFw.webp 720w, https:\/\/miro.medium.com\/max\/750\/1*hhfRKbHBgeJ7HH6CqQclFw.webp 750w, https:\/\/miro.medium.com\/max\/786\/1*hhfRKbHBgeJ7HH6CqQclFw.webp 786w, https:\/\/miro.medium.com\/max\/828\/1*hhfRKbHBgeJ7HH6CqQclFw.webp 828w, https:\/\/miro.medium.com\/max\/1100\/1*hhfRKbHBgeJ7HH6CqQclFw.webp 1100w, https:\/\/miro.medium.com\/max\/800\/1*hhfRKbHBgeJ7HH6CqQclFw.webp 800w\" type=\"image\/webp\" sizes=\"(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 400px\" \/><source srcset=\"https:\/\/miro.medium.com\/max\/640\/1*hhfRKbHBgeJ7HH6CqQclFw.jpeg 640w, https:\/\/miro.medium.com\/max\/720\/1*hhfRKbHBgeJ7HH6CqQclFw.jpeg 720w, https:\/\/miro.medium.com\/max\/750\/1*hhfRKbHBgeJ7HH6CqQclFw.jpeg 750w, https:\/\/miro.medium.com\/max\/786\/1*hhfRKbHBgeJ7HH6CqQclFw.jpeg 786w, https:\/\/miro.medium.com\/max\/828\/1*hhfRKbHBgeJ7HH6CqQclFw.jpeg 828w, https:\/\/miro.medium.com\/max\/1100\/1*hhfRKbHBgeJ7HH6CqQclFw.jpeg 1100w, https:\/\/miro.medium.com\/max\/800\/1*hhfRKbHBgeJ7HH6CqQclFw.jpeg 800w\" sizes=\"(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 400px\" data-testid=\"og\" \/><img class=\"bf ik il c\" src=\"https:\/\/miro.medium.com\/max\/450\/1*hhfRKbHBgeJ7HH6CqQclFw.jpeg\" alt=\"server side rendered components\" width=\"400\" height=\"232\" \/><\/picture><\/div> <figcaption class=\"im in es eq er io ip bd b be z dw\" data-selectable-paragraph=\"\">Server Side Rendered Components<\/figcaption> <\/figure> <h1 id=\"564c\" class=\"iq ir hi bd is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj jk jl jm jn bi\" data-selectable-paragraph=\"\">Prerequisites<\/h1> <p id=\"8c09\" class=\"pw-post-body-paragraph jo jp hi jq b jr js jt ju jv jw jx jy jz ka kb kc kd ke kf kg kh ki kj kk kl hb bi\" data-selectable-paragraph=\"\">Basic understanding of React.js and Functional Programming Concepts.<\/p>",
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
        ImageUrl:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
