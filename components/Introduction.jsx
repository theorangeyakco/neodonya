import React from "react";
import styles from "../styles/intro.module.css";

const Introduction = () => {
  return (
    <div className={styles.arrow_wrapper}>
      <div className={styles.arrows_text}>
        <p className={styles.text}>
          <span>I am a </span>
          <span className={styles.grad}>HR Manager</span>
          <span> at</span>
        </p>

        <p className={styles.text}>
          <span>a </span>
          <span className={styles.grad}>Software</span>
          <span> firm. Neodonya can</span>
        </p>

        <p className={styles.text}>
          <span>help bring attrition down by </span>
          <span className={styles.plain}>20%.</span>
        </p>
      </div>

      <div className={styles.arrows} />
    </div>
  );
};

export default Introduction;
