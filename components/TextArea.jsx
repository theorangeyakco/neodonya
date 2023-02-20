import React from "react";
import styles from "../styles/soln.module.css";

const TextArea = ({ name, ph }) => {
  return (
    <div className={styles.text_wrapper}>
      <div className={styles.text_shadow} id="t1" />
      <textarea
        rows="4"
        id="t2"
        name={name}
        placeholder={ph}
        className={styles.text_input}
      />
    </div>
  );
};

export default TextArea;
