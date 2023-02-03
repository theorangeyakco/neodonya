import React, { useEffect, useState } from "react";
import styles from "../styles/blogs.module.css";

const STORE = [
  {
    link: "https://docs.google.com/document/d/1FBe_xUsaC4GGgfGIQYHYON9DjMfqQbwWh-NWgd5A7qc/edit",
    image: "blogs/blog1.png",
    title:
      "Unlocking the Potential of the Corporate Metaverse: The Future of Technical Training",
    body: "The corporate metaverse is an emerging technology that has the potential to revolutionize the way we approach technical training. This virtual world, created by the convergence of virtual reality, augmented reality and artificial intelligence, offers a new level of engagement an..",
  },
  {
    link: "https://docs.google.com/document/d/1FBe_xUsaC4GGgfGIQYHYON9DjMfqQbwWh-NWgd5A7qc/edit",
    image: "blogs/blog2.png",
    title:
      "Unlocking the Potential of the Corporate Metaverse: The Future of Technical Training",
    body: "The metaverse, a virtual world where users can interact with digital objects and environments, has been gaining more and more attention in recent years. With the pandemic forcing many businesses to adopt remote work and virtual interaction, the metaverse has become an attractive pl..",
  },
  {
    link: "",
    image: "",
    title: "",
    body: "",
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(
      STORE.map((e, i) => (
        <a key={i} href={e.link} className={styles.blog}>
          <img className={styles.blog_img} src={e.image} />
          <div className={styles.blog_title}>{e.title}</div>
          <div className={styles.blog_body}>{e.body}</div>
        </a>
      ))
    );
  }, []);

  return (
    <div className={styles.blog_wrapper}>
      <div className={styles.title}>BLOG</div>
      <div className={styles.blogs}>{blogs}</div>
    </div>
  );
};

export default Blogs;
