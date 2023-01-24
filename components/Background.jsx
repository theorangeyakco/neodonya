import React from "react";
import styles from "../styles/back.module.css";
import Button from "./Button";

const Background = () => {
  return (
    <>
      <img className={styles.landing_bg} src="background/background.png" />

      <div className={styles.top_flex}>
        <a href="/" className={styles.logo}>
          <img src="background/logo.png" alt="Neodonya" />
        </a>
        <Button text="Contact Us" />
      </div>
    </>
  );
};

export default Background;
