import React, { useEffect, useState } from "react";
import styles from "../styles/prod.module.css";

const PRODUCTS = [
  {
    image: "products/ctr.png",
    tag1: "#corporatetraining",
    tag2: "#metaversetraining",
    title: "Corporate Training",
    body: "Our training platform allows for immersive and realistic training, improving employee skills, productivity and knowledge retention across various industries and sectors.",
  },
  {
    image: "products/whs.png",
    tag1: "#warehousetraining",
    tag2: "#virtualrealitytraining",
    title: "Warehouse Training",
    body: "Our virtual reality-based training platform allows for immersive and realistic training for warehouse operations, improving efficiency and safety.",
  },
  {
    image: "products/eob.png",
    tag1: "#employeeonboarding",
    tag2: "#virtualonboarding",
    title: "Employee Onboarding",
    body: "Our virtual onboarding program allows new employees to quickly familiarize themselves with company policies, procedures and culture.",
  },
  {
    image: "products/npe.png",
    tag1: "#metaverseevents",
    tag2: "#virtualconferences",
    title: "Metaverse Event Hosting",
    body: "Our platform enables businesses to host virtual events and conferences, allowing for seamless participation and engagement.",
  },
  {
    image: "products/pdm.png",
    tag1: "#productdemonstrations",
    tag2: "#virtualshowcase",
    title: "Product Demonstrations",
    body: "Our virtual environments enable businesses to showcase their products and services in a highly interactive and engaging way.",
  },
  {
    image: "products/mrt.png",
    tag1: "#metaverseshopping",
    tag2: "#virtualstores",
    title: "Metaverse Retail",
    body: "Our platform allows businesses to create virtual stores, enabling customers to shop and interact with products in a virtual environment",
  },
  {
    image: "products/wcm.png",
    tag1: "#virtualwatercooler",
    tag2: "#teamcollaboration",
    title: "Water Cooler Meetings",
    body: "Our virtual environments allow teams to meet and collaborate in a casual and informal setting, fostering a sense of community and engagement.",
  },
  {
    image: "products/dvz.png",
    tag1: "#datavisualization",
    tag2: "#virtualrealitydata",
    title: "Reality-based data visualization",
    body: "We offer advanced visualization solutions for data, which enables businesses to make data-driven decisions.",
  },
];

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(
      PRODUCTS.map((e, i) => (
        <div key={i} className={styles.product}>
          <img className={styles.product_img} src={e.image} />

          <div className={styles.product_text}>
            <div className={styles.tags}>
              <button className={`${styles.arvr} ${styles.tag}`}>
                {e.tag1}
              </button>
              <button className={`${styles.corp} ${styles.tag}`}>
                {e.tag2}
              </button>
            </div>

            <div className={styles.head}>{e.title}</div>
            <div className={styles.body}>{e.body}</div>

            <div
              className={styles.learn_more}
              id="learn-more1"
            >{`Learn more ->`}</div>
          </div>
        </div>
      ))
    );
  }, []);

  return (
    <div className={styles.prod_wrapper}>
      <div className={styles.title}>PRODUCTS</div>
      <div className={styles.products}>{products}</div>
    </div>
  );
};

export default Product;
