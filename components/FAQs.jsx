import React, { useEffect, useState } from "react";
import styles from "../styles/faq.module.css";

const STORE = [
  {
    head: "When was this company founded1",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo eligendi repudiandae corporis delectus itaque minus facilis ratione rem id fugit accusantium, officia neque impedit molestiae omnis quos ipsum numquam eius hic sint quia exercitationem debitis velit? Reiciendis, fugiat blanditiis.",
  },
  {
    head: "When was this company founded2",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo eligendi repudiandae corporis delectus itaque minus facilis ratione rem id fugit accusantium, officia neque impedit molestiae omnis quos ipsum numquam eius hic sint quia exercitationem debitis velit? Reiciendis, fugiat blanditiis.",
  },
  {
    head: "When was this company founded3",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo eligendi repudiandae corporis delectus itaque minus facilis ratione rem id fugit accusantium, officia neque impedit molestiae omnis quos ipsum numquam eius hic sint quia exercitationem debitis velit? Reiciendis, fugiat blanditiis.",
  },
  {
    head: "When was this company founded4",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo eligendi repudiandae corporis delectus itaque minus facilis ratione rem id fugit accusantium, officia neque impedit molestiae omnis quos ipsum numquam eius hic sint quia exercitationem debitis velit? Reiciendis, fugiat blanditiis.",
  },
  {
    head: "When was this company founded5",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo eligendi repudiandae corporis delectus itaque minus facilis ratione rem id fugit accusantium, officia neque impedit molestiae omnis quos ipsum numquam eius hic sint quia exercitationem debitis velit? Reiciendis, fugiat blanditiis.",
  },
];

const FAQs = () => {
  const [FAQs, setFAQs] = useState([]),
    [open, setOpen] = useState([]),
    [display, setDisplay] = useState([]);

  const init = () => {
    const TEMP_FAQS = [];
    for (let i = 0; i < STORE.length; i++)
      TEMP_FAQS.push(
        <div key={i} className={styles.faq}>
          <div onClick={() => toggle(i)} className={styles.faq_head}>
            <button className={styles.open}>“</button>
            <div className={styles.question}>{STORE[i].head}</div>
          </div>
          <div className={display[i]}>{STORE[i].body}</div>
        </div>
      );

    setFAQs(TEMP_FAQS);
  };

  const toggle = (i) => {
    const TEMP_DISP = [...display];
    TEMP_DISP[i] = open[i]
      ? `${styles.faq_body} ${styles.no}`
      : `${styles.faq_body} ${styles.yes}`;

    const TEMP_OPEN = [...open];
    TEMP_OPEN[i] = !TEMP_OPEN[i];

    setOpen(TEMP_OPEN);
    setDisplay(TEMP_DISP);
  };

  useEffect(() => {
    const TEMP_FAQS = [];
    const TEMP_OPEN = [];
    const TEMP_DISP = [];

    for (let i = 0; i < STORE.length; i++) {
      TEMP_OPEN[i] = true;
      TEMP_DISP[i] = styles.faq_body;

      TEMP_FAQS.push(
        <div key={i} onClick={() => toggle(i)} className={styles.faq}>
          <div className={styles.faq_head}>
            <button className={styles.open}>“</button>
            <div className={styles.question}>{STORE[i].head}</div>
          </div>
          <div className={display[i]}>{STORE[i].body}</div>
        </div>
      );
    }

    setFAQs(TEMP_FAQS);
    setOpen(TEMP_OPEN);
    setDisplay(TEMP_DISP);
  }, []);

  useEffect(() => {
    init();
  }, [display]);

  return (
    <div className={styles.faq_wrapper}>
      <img className={styles.blue} src="FAQs/blue.svg" />
      <div className={styles.title}>FAQs</div>
      <div className={styles.faqs}>{FAQs}</div>
    </div>
  );
};

export default FAQs;
