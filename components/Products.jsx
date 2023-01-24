import React from "react";
import styles from "../styles/prod.module.css";

const Product = () => {
  return (
    <div className={styles.prod_wrapper}>
      <div className={styles.title}>PRODUCTS</div>
      <div className={styles.products}>
        <div className={styles.product}>
          <img className={styles.product_img} src="products/prod1.png" />

          <div className={styles.product_text}>
            <div className={styles.tags}>
              <button className={`${styles.arvr} ${styles.tag}`}>AR/VR</button>
              <button className={`${styles.corp} ${styles.tag}`}>
                CORPORATE TRAINING
              </button>
            </div>

            <div className={styles.head}>Metaverse Solutions</div>
            <div className={styles.body}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ipsam atque incidunt ad ipsa accusantium quam nesciunt illo ullam,
              doloribus optio et adipisci molestiae minima explicabo veniam
              dignissimos vel asperiores sequi esse aut, incidunt temporibus.
            </div>

            <div
              className={styles.learn_more}
              id="learn-more1"
            >{`Learn more ->`}</div>
          </div>
        </div>

        <div
          className={styles.product}
          style={{ flexDirection: "row-reverse" }}
        >
          <img className={styles.product_img} src="products/prod2.png" />

          <div className={styles.product_text}>
            <div className={styles.tags}>
              <button className={`${styles.arvr} ${styles.tag}`}>AR/VR</button>
              <button className={`${styles.corp} ${styles.tag}`}>
                CORPORATE TRAINING
              </button>
            </div>

            <div className={styles.head}>Metaverse Solutions</div>
            <div className={styles.body}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ipsam atque incidunt ad ipsa accusantium quam nesciunt ili esse
              aut, incidunt temporibus.
            </div>

            <div
              className={styles.learn_more}
              id="learn-more1"
            >{`Learn more ->`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
