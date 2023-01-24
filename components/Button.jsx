import React from "react";
import styles from "../styles/back.module.css";

const Button = ({ text }) => {
  return (
    <button className={styles.btn_wrapper}>
      <div className={styles.btn_box1} />
      <div className={styles.btn_box2} />
      <div className={styles.text}>{text}</div>
    </button>
  );
};

export default Button;
