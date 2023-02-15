import React from "react";
import styles from "../styles/back.module.css";
import Button from "./Button";

const Background = () => {
  return (
    <>
      <video
        className={styles.landing_bg}
        autoPlay
        muted
        playsInline
        loop
        src="background/web.mp4"
      />

      <div className={styles.top_flex}>
        <a href="/" className={styles.logo}>
          <img src="background/logo.svg" alt="Neodonya" />
        </a>
        <Button text="Contact Us" />
      </div>
    </>
  );
};

export default Background;
