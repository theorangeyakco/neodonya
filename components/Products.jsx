import React, { useEffect, useState } from "react";
import styles from "../styles/prod.module.css";

const PRODUCTS = [
  {
    image:
      "https://images.unsplash.com/photo-1554474051-0256b98c36f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    tag1: "#corporatetraining",
    tag2: "#metaversetraining",
    title: "Corporate Training",
    body: "Our training platform allows for immersive and realistic training, improving employee skills, productivity and knowledge retention across various industries and sectors.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    tag1: "#warehousetraining",
    tag2: "#virtualrealitytraining",
    title: "Warehouse Training",
    body: "Our virtual reality-based training platform allows for immersive and realistic training for warehouse operations, improving efficiency and safety.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1653158861306-e5b3804f6115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    tag1: "#employeeonboarding",
    tag2: "#virtualonboarding",
    title: "Employee Onboaring",
    body: "Our virtual onboarding program allows new employees to quickly familiarize themselves with company policies, procedures and culture.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1639174326326-6e2ef8d8ae39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    tag1: "#metaverseevents",
    tag2: "#virtualconferences",
    title: "Metaverse Event Hosting",
    body: "Our platform enables businesses to host virtual events and conferences, allowing for seamless participation and engagement.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80",
    tag1: "#productdemonstrations",
    tag2: "#virtualshowcase",
    title: "Product Demonstrations",
    body: "Our virtual environments enable businesses to showcase their products and services in a highly interactive and engaging way.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1538388149542-5e24932d11a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    tag1: "#metaverseshopping",
    tag2: "#virtualstores",
    title: "Metaverse Retail",
    body: "Our platform allows businesses to create virtual stores, enabling customers to shop and interact with products in a virtual environment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554474051-0256b98c36f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    tag1: "#virtualwatercooler",
    tag2: "#teamcollaboration",
    title: "Water Cooler Meetings",
    body: "Our virtual environments allow teams to meet and collaborate in a casual and informal setting, fostering a sense of community and engagement.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563372590-aa093423dcbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1022&q=80",
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
