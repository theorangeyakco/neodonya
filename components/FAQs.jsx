import React, { useEffect, useState } from "react";
import styles from "../styles/faq.module.css";

const STORE = [
  {
    head: "What is a corporate metaverse?",
    body: "A corporate metaverse is a virtual environment that allows businesses to conduct their operations and activities in a highly immersive and interactive way. It enables remote collaboration and communication, as well as the ability to host virtual events and conferences, create virtual stores, and offer virtual training and education.",
  },
  {
    head: "How does virtual reality-based training improve employee skills?",
    body: "Virtual reality-based training provides a highly immersive and realistic environment that allows employees to practice and apply their skills in a safe and controlled setting. This improves their understanding of the subject matter and allows them to retain the knowledge better. It also allows for more efficient and effective training, as the virtual environment can be customized to meet specific training needs.",
  },
  {
    head: "Can the corporate metaverse be used for remote work?",
    body: "Yes, the corporate metaverse enables remote work, collaboration, and communication through virtual environments, making it easy for teams to work together from anywhere.",
  },
  {
    head: "How does virtual reality-based data visualization help businesses make decisions?",
    body: "Virtual reality-based data visualization allows businesses to explore data in a 3D environment, which makes it easier to identify patterns and trends. The data can be visualized in a variety of ways, such as graphs, charts, and maps, and can be customized to meet the specific needs of the business. This allows businesses to make more informed decisions, as they can see the data in a more intuitive way and identify key insights that may not be obvious in traditional data visualization methods.",
  },
  {
    head: "Can the corporate metaverse be used for product demonstrations?",
    body: "Yes, the corporate metaverse allows businesses to showcase their products and services in a highly interactive and engaging way, enabling customers to see and interact with the products in a virtual environment.",
  },
  {
    head: "Can the corporate metaverse be used for hosting virtual events?",
    body: "Yes, the corporate metaverse enables businesses to host virtual events and conferences, allowing for seamless participation and engagement.",
  },
  {
    head: "How does the corporate metaverse foster a sense of community and engagement among teams?",
    body: "The corporate metaverse allows teams to meet and collaborate in a casual and informal setting, such as a virtual water cooler, fostering a sense of community and engagement. It also enables remote teams to feel more connected and engaged, as they can interact with each other in a virtual environment.",
  },
];

const FAQs = () => {
  const [FAQs, setFAQs] = useState([]),
    [open, setOpen] = useState([]),
    [display, setDisplay] = useState([]);

  useEffect(() => {
    setOpen(STORE.map(e => false));
    setDisplay(STORE.map(e => `${styles.faq_body} ${styles.no}`));
  }, []);

  useEffect(() => {
    setFAQs(
      STORE.map((e, i) => (
        <div key={i} onClick={() => toggle(i)} className={styles.faq}>
          <div className={styles.faq_head}>
            <button className={styles.open}>“</button>
            <div className={styles.question}>{e.head}</div>
          </div>
          <div className={display[i]}>{e.body}</div>
        </div>
      ))
    );
  }, [display]);

  const toggle = index =>
    setOpen(STORE.map((e, i) => (i == index ? !open[i] : open[i])));

  useEffect(() => {
    setDisplay(
      STORE.map((e, i) =>
        open[i]
          ? `${styles.faq_body} ${styles.yes}`
          : `${styles.faq_body} ${styles.no}`
      )
    );
  }, [open]);

  return (
    <div className={styles.faq_wrapper}>
      <img className={styles.blue} src="FAQs/blue.svg" />
      <div className={styles.title}>FAQs</div>
      <div className={styles.faqs}>{FAQs}</div>
    </div>
  );
};

export default FAQs;
