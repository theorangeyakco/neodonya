import React from "react";
import styles from "../styles/blogs.module.css";

const Modal = ({ setVisible, visible, modal }) => {
  function check(e) {
    const ele = e.target.className;

    ele != styles.modal &&
    ele != styles.modal_title &&
    ele != styles.modal_text &&
    ele != styles.modal_more &&
    ele != styles.modal_img &&
    ele != styles.img_wrapper
      ? setVisible(false)
      : null;
  }

  return (
    <div
      onClick={check}
      style={visible ? { display: "flex" } : { display: "none" }}
      className={styles.modal_bg}
    >
      <div className={styles.modal}>
        <div className={styles.modal_title}>{modal.title}</div>
        <div className={styles.body_wrapper}>
          <div className={styles.img_wrapper}>
            <a href={modal.link} className={styles.modal_more}>
              Read More
            </a>
            <img className={styles.modal_img} src={modal.image} />
            <img className={styles.modal_img} src={modal.image} />
            <img className={styles.modal_img} src={modal.image} />
          </div>
          <div className={styles.modal_text}>{modal.body}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
