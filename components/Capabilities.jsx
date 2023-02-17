import React, { useEffect, useState } from "react";
import styles from "../styles/cap.module.css";

const STORE = [
  {
    image: "capabilities/car1.png",
    title: "Virtual Worlds",
    body: "Our company specializes in creating immersive virtual worlds for businesses, allowing for remote collaboration and communication.",
  },
  {
    image: "capabilities/car2.png",
    title: "Game-based Learning",
    body: "Our platform uses game-based learning techniques to make training and education more engaging and effective.",
  },
  {
    image: "capabilities/car3.png",
    title: "Digital Twins",
    body: "Our digital twin technology allows businesses to create virtual copies of their physical assets for remote monitoring and management",
  },

  {
    image: "capabilities/car1.png",
    title: "AI - GPT3 integration",
    body: "Our AI integration with GPT-3 allows for natural language processing and advanced chatbot capabilities",
  },
  {
    image: "capabilities/car2.png",
    title: "AR/VR",
    body: "Our expertise in AR and VR technology allows for enhanced visualization and engagement in virtual environments",
  },
  {
    image: "capabilities/car3.png",
    title: "Lifelike Avatars",
    body: "Our avatars are highly customizable and realistic, allowing for seamless communication and interaction in virtual worlds",
  },
];

const Capabilities = () => {
  const [data, setData] = useState(),
    [cards, setCards] = useState(),
    [middle, setMiddle] = useState(1);

  useEffect(() => {
    fillData(1);
  }, []);

  const fillData = mid => {
    let one, two, three;
    switch (mid) {
      case 0:
        one = STORE.length - 1;
        two = mid;
        three = mid + 1;
        break;

      case STORE.length - 1:
        one = mid - 1;
        two = mid;
        three = 0;
        break;

      default:
        one = mid - 1;
        two = mid;
        three = mid + 1;
        break;
    }

    setData([STORE[one], STORE[two], STORE[three]]);
  };

  useEffect(() => {
    setCards(
      data?.map((ele, i) => (
        <div key={i} className={styles.card}>
          <img className={styles.card_img} src={ele.image} />
          <div className={styles.card_title}>{ele.title}</div>
          <div className={styles.card_body}>{ele.body}</div>
        </div>
      ))
    );
  }, [data]);

  const next = () => setMiddle(middle == STORE.length - 1 ? 0 : middle + 1);

  const prev = () => setMiddle(middle == 0 ? STORE.length - 1 : middle - 1);

  useEffect(() => {
    fillData(middle);
  }, [middle]);

  return (
    <div className={styles.cap_wrapper}>
      <img className={styles.pink} src="capabilities/pink.svg" />
      <div className={styles.title}>CAPABILITIES</div>

      <div className={styles.carousel}>
        {cards}

        <button onClick={() => next()} className={styles.right}>{`>`}</button>
        <button onClick={() => prev()} className={styles.left}>{`<`}</button>
      </div>
    </div>
  );
};

export default Capabilities;
