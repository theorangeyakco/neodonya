import React from "react";
import styles from "../styles/soln.module.css";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";

const Solution = () => {
  return (
    <div className={styles.soln_wrapper}>
      <img className={styles.purple} src="solutions/purple.png" />
      <div className={styles.title}>Looking for a custom solution?</div>

      <form onSubmit={(e) => e.preventDefault()} className={styles.soln_form}>
        <Input ph="what's your name?" />
        <Input ph="enter your email address" />
        <TextArea ph="send us a message.." />
        <Button text="Submit" />
      </form>
    </div>
  );
};

export default Solution;
