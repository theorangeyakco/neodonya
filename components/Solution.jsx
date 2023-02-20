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

      <form
        action="https://formspree.io/f/mjvdwwop"
        method="POST"
        className={styles.soln_form}
      >
        <Input req={true} type="text" name="name" ph="what's your name?" />
        <Input
          req={true}
          type="email"
          name="email"
          ph="enter your email address"
        />
        <TextArea name="message" ph="send us a message.." />
        <Button text="Submit" />
      </form>
    </div>
  );
};

export default Solution;
