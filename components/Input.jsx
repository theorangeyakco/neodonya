import React from "react";
import styles from "../styles/soln.module.css";

const Input = ({ ph }) => {
  return (
    <div className={styles.text_wrapper}>
      <div className={styles.text_shadow} />
      <input type="text" placeholder={ph} className={styles.text_input} />
    </div>
  );
};

export default Input;
