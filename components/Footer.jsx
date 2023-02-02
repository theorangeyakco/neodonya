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
          <a href="/">
            <img className={styles.logo} src="footer/insta.svg" />
          </a>
          <a href="https://www.linkedin.com/company/neodonya/">
            <img className={styles.logo} src="footer/linkedin.svg" />
          </a>
          <a href="/">
            <img className={styles.logo} src="footer/twitter.svg" />
          </a>
        </div>
      </div>

      <div className={styles.footer_middle}>
        <div className={styles.box}>
          <div className={styles.title}>Company</div>
          <div className={styles.point}>
            <img src="footer/map.svg" />
            <a href="https://goo.gl/maps/soGTCAwvss714mCJ6">
              Workafella Alwarpet, 37, TT Krishnamachari Rd <br /> CIT Colony,
              Alwarpet, Chennai, Tamil Nadu - 600018
            </a>
          </div>
          <div className={styles.point}>
            <img src="footer/mail.svg" />
            <a href="mailto:partnerships@xplorro.com">
              partnerships@xplorro.com
            </a>
          </div>
          <div className={styles.point}>
            <img src="footer/phone.svg" />
            <a href="tel:9840429071">+91 98404 29071</a>
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
