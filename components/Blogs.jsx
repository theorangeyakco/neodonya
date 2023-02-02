import React from "react";
import styles from "../styles/blogs.module.css";

const Blogs = () => {
  return (
    <div className={styles.blog_wrapper}>
      <div className={styles.title}>BLOG</div>

      <div className={styles.blogs}>
        <div className={styles.blog}>
          <img className={styles.blog_img} src="blogs/blog2.png" />
          <div className={styles.blog_title}>
            Unlocking the Potential of the Corporate Metaverse: The Future of
            Technical Training
          </div>
          <div className={styles.blog_body}>
            The corporate metaverse is an emerging technology that has the
            potential to revolutionize the way we approach technical training.
            This virtual world, created by the convergence of virtual reality,
            augmented reality and artificial intelligence, offers a new level of
            engagement and inte...
          </div>
        </div>

        <div className={styles.blog}>
          <img className={styles.blog_img} src="blogs/blog1.png" />
          <div className={styles.blog_title}>
            Training in the Metaverse: Elevating QSR Skills to the Next Level
          </div>
          <div className={styles.blog_body}>
            The metaverse, a virtual world where users can interact with digital
            objects and environments, has been gaining more and more attention
            in recent years. With the pandemic forcing many businesses to adopt
            remote work and virtual interaction, the metaverse has become an
            attractive pl...
          </div>
        </div>

        <div className={styles.blog}>
          {/* <img className={styles.blog_img} src="blogs/blog3.png" />
          <div className={styles.blog_title}>Metaverse Solutions</div>
          <div className={styles.blog_body}>
            Voluptate minim laborum minim aliquip officia in nisi occaecat ea
            anim nostrud. Voluptate minim laborum minim.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
