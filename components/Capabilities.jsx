import React, { useEffect, useState } from "react";
import styles from "../styles/cap.module.css";

const STORE = [
  {
    image: "capabilities/car1.png",
    title: "Metaverse Solutions 1",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt facilis quisquam nulla natus minus labore molestiae sunt esse quidem molestias, deleniti sint nostrum a dolor magnam tenetur. Cum velit odio exercitationem quis quod, laudantium ex dolores culpa aliquid soluta?",
  },
  {
    image: "capabilities/car2.png",
    title: "Metaverse Solutions 2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt facilis quisquam nulla natus minus labore molestiae sunt esse quidem molestias, deleniti sint nostrum a dolor magnam tenetur. Cum velit odio exercitationem quis quod, laudantium ex dolores culpa aliquid soluta?",
  },
  {
    image: "capabilities/car3.png",
    title: "Metaverse Solutions 3",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt facilis quisquam nulla natus minus labore molestiae sunt esse quidem molestias, deleniti sint nostrum a dolor magnam tenetur. Cum velit odio exercitationem quis quod, laudantium ex dolores culpa aliquid soluta?",
  },

  {
    image: "capabilities/car1.png",
    title: "Metaverse Solutions 4",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt facilis quisquam nulla natus minus labore molestiae sunt esse quidem molestias, deleniti sint nostrum a dolor magnam tenetur. Cum velit odio exercitationem quis quod, laudantium ex dolores culpa aliquid soluta?",
  },
  {
    image: "capabilities/car2.png",
    title: "Metaverse Solutions 5",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt facilis quisquam nulla natus minus labore molestiae sunt esse quidem molestias, deleniti sint nostrum a dolor magnam tenetur. Cum velit odio exercitationem quis quod, laudantium ex dolores culpa aliquid soluta?",
  },
  {
    image: "capabilities/car3.png",
    title: "Metaverse Solutions 6",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt facilis quisquam nulla natus minus labore molestiae sunt esse quidem molestias, deleniti sint nostrum a dolor magnam tenetur. Cum velit odio exercitationem quis quod, laudantium ex dolores culpa aliquid soluta?",
  },
];

const Capabilities = () => {
  const [data, setData] = useState(),
    [cards, setCards] = useState(),
    [middle, setMiddle] = useState(1);

  useEffect(() => {
    fillData(1);
  }, []);

  const fillData = (mid) => {
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
