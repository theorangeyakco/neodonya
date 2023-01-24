import React from "react";
import styles from "../styles/cap.module.css";

const Capabilities = () => {
  return (
    <div className={styles.cap_wrapper}>
      <img className={styles.bg} src="capabilities/back.svg" />

      <img className={styles.pink} src="capabilities/pink.svg" />

      <div className={styles.title}>CAPABILITIES</div>

      <div className={styles.carousel}>
        <div className={styles.card}>
          <img className={styles.card_img} src="capabilities/car3.png" />
          <div className={styles.card_title}>Metaverse Solutions 1</div>
          <div className={styles.card_body}>
            Voluptate minim laborum minim aliquip officia in nisi occaecat ea
            anim nostrud. Voluptate minim laborum minim.
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.card_img} src="capabilities/car2.png" />
          <div className={styles.card_title}>Metaverse Solutions 2</div>
          <div className={styles.card_body}>
            Voluptate minim laborum minim aliquip officia in nisi occaecat ea
            anim nostrud. Voluptate minim laborum minim.
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.card_img} src="capabilities/car1.png" />
          <div className={styles.card_title}>Metaverse Solutions 3</div>
          <div className={styles.card_body}>
            Voluptate minim laborum minim aliquip officia in nisi occaecat ea
            anim nostrud. Voluptate minim laborum minim.
          </div>
        </div>

        <button className={styles.right}>{`>`}</button>
        <button className={styles.left}>{`<`}</button>
      </div>
    </div>
  );
};

export default Capabilities;
