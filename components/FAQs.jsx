import React from "react";
import styles from "../styles/faq.module.css";

const FAQs = () => {
  return (
    <div className={styles.faq_wrapper}>
      <img className={styles.blue} src="FAQs/blue.svg" />
      <div className={styles.title}>FAQs</div>

      <div className={styles.faqs}>
        <div className={styles.faq}>
          <div className={styles.faq_head}>
            <button className={styles.open}>“</button>
            <div className={styles.question}>
              When was this company founded?
            </div>
          </div>
          <div className={styles.faq_body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
            eligendi repudiandae corporis delectus itaque minus facilis ratione
            rem id fugit accusantium, officia neque impedit molestiae omnis quos
            ipsum numquam eius hic sint quia exercitationem debitis velit?
            Reiciendis, fugiat blanditiis.
          </div>
        </div>

        <div className={styles.faq}>
          <div className={styles.faq_head}>
            <button className={styles.open}>“</button>
            <div className={styles.question}>
              When was this company founded?
            </div>
          </div>
          <div className={styles.faq_body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
            eligendi repudiandae corporis delectus itaque minus facilis ratione
            rem id fugit accusantium, officia neque impedit molestiae omnis quos
            ipsum numquam eius hic sint quia exercitationem debitis velit?
            Reiciendis, fugiat blanditiis.
          </div>
        </div>

        <div className={styles.faq}>
          <div className={styles.faq_head}>
            <button className={styles.open}>“</button>
            <div className={styles.question}>
              When was this company founded?
            </div>
          </div>
          <div className={styles.faq_body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
            eligendi repudiandae corporis delectus itaque minus facilis ratione
            rem id fugit accusantium, officia neque impedit molestiae omnis quos
            ipsum numquam eius hic sint quia exercitationem debitis velit?
            Reiciendis, fugiat blanditiis.
          </div>
        </div>

        <div className={styles.faq}>
          <div className={styles.faq_head}>
            <button className={styles.open}>“</button>
            <div className={styles.question}>
              When was this company founded?
            </div>
          </div>
          <div className={styles.faq_body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
            eligendi repudiandae corporis delectus itaque minus facilis ratione
            rem id fugit accusantium, officia neque impedit molestiae omnis quos
            ipsum numquam eius hic sint quia exercitationem debitis velit?
            Reiciendis, fugiat blanditiis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
