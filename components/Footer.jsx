import React from "react";
import styles from "../styles/foot.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_top}>
        <div className={styles.immersive}>
          <a href="/" className={styles.immersive_logo}>
            <img src="footer/logo.png" />
          </a>
          <div className={styles.immersive_text}>
            We build immersive <br /> experiences for your company.
          </div>
        </div>

        <div className={styles.logos}>
          <img className={styles.logo} src="footer/insta.svg" />
          <img className={styles.logo} src="footer/linkedin.svg" />
          <img className={styles.logo} src="footer/twitter.svg" />
        </div>
      </div>

      <div className={styles.footer_middle}>
        <div className={styles.box}>
          <div className={styles.title}>Company</div>
          <div className={styles.point}>
            <img src="footer/map.svg" />
            <a href="/">HSR Layout, Bengaluru, Karnataka</a>
          </div>
          <div className={styles.point}>
            <img src="footer/mail.svg" />
            <a href="/">contact@neodonya.com</a>
          </div>
          <div className={styles.point}>
            <img src="footer/phone.svg" />
            <a href="/">+91 99102 31328</a>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.title}>Products</div>
          <a className={styles.point}>Onboarding</a>
          <a className={styles.point}>Metaverse Meeting</a>
          <a className={styles.point}>Warehouse Training</a>
          <a className={styles.point}>Custom Products</a>
        </div>

        <div className={styles.box}>
          <div className={styles.title}>Capabilities</div>
          <a className={styles.point}>Onboarding</a>
          <a className={styles.point}>Metaverse Meeting</a>
          <a className={styles.point}>Warehouse Training</a>
          <a className={styles.point}>Custom Products</a>
        </div>

        <div className={styles.box}>
          <div className={styles.title}>Resources</div>
          <a className={styles.point}>Onboarding</a>
          <a className={styles.point}>Metaverse Meeting</a>
          <a className={styles.point}>Warehouse Training</a>
          <a className={styles.point}>Custom Products</a>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.bottom_left}>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Cookies Settings</a>
        </div>

        <div className={styles.bottom_right}>
          <span>Copyright (c) 2023 </span>
          <a className={styles.neodonya} href="/">
            Neodonya
          </a>
          <span>. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
