import React from "react";
import styles from "../styles/faq.module.css";

const FAQs = () => {
  return (
    <div className={styles.faq_wrapper}>
      <img className={styles.bg} src="FAQs/back.svg" />

      <img className={styles.blue} src="FAQs/blue.svg" />

      <div className={styles.title}>FAQs</div>

      <div className={styles.faqs}>
        <div className={styles.faq}>
          <button className={styles.open}>“</button>
          <div className={styles.question}>When was this company founded?</div>
        </div>

        <div className={styles.faq}>
          <button className={styles.open}>“</button>
          <div className={styles.question}>When was this company founded?</div>
        </div>

        <div className={styles.faq}>
          <button className={styles.open}>“</button>
          <div className={styles.question}>When was this company founded?</div>
        </div>

        <div className={styles.faq}>
          <button className={styles.open}>“</button>
          <div className={styles.question}>When was this company founded?</div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
