import React from "react";
import styles from "../styles/blogs.module.css";

const Blogs = () => {
  return (
    <div className={styles.blog_wrapper}>
      <div className={styles.title}>BLOG</div>

      <div className={styles.blogs}>
        <div className={styles.blog}>
          <img className={styles.blog_img} src="blogs/blog2.png" />
          <div className={styles.blog_title}>Metaverse Solutions</div>
          <div className={styles.blog_body}>
            Voluptate minim laborum minim aliquip officia in nisi occaecat ea
            anim nostrud. Voluptate minim laborum minim.
          </div>
        </div>

        <div className={styles.blog}>
          <img className={styles.blog_img} src="blogs/blog1.png" />
          <div className={styles.blog_title}>Metaverse Solutions</div>
          <div className={styles.blog_body}>
            Voluptate minim laborum minim aliquip officia in nisi occaecat ea
            anim nostrud. Voluptate minim laborum minim.
          </div>
        </div>

        <div className={styles.blog}>
          <img className={styles.blog_img} src="blogs/blog3.png" />
          <div className={styles.blog_title}>Metaverse Solutions</div>
          <div className={styles.blog_body}>
            Voluptate minim laborum minim aliquip officia in nisi occaecat ea
            anim nostrud. Voluptate minim laborum minim.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
