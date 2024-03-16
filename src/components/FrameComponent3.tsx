import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className={styles.nomeWrapper}>
      <header className={styles.nome}>
        <img
          className={styles.dashboardInfoIcon}
          loading="lazy"
          alt=""
          src="/frame-2@2x.png"
        />
        <div className={styles.fAQItemWrapper}>
          <div className={styles.fAQItem}>
            <div className={styles.howItWorks}>How it works</div>
            <div className={styles.aboutLottery}>About Lottery</div>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
        </div>
        <div className={styles.dashboardInfo}>
          <div className={styles.dashboardWrapper}>
            <div className={styles.dashboard}>DASHBOARD</div>
          </div>
          <img
            className={styles.linearArrowsAltArrowRi}
            loading="lazy"
            alt=""
            src="/linear--arrows--alt-arrow-right-1.svg"
          />
        </div>
      </header>
    </section>
  );
};

export default FrameComponent3;
