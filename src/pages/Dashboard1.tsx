import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./Dashboard1.module.css";

const Dashboard1: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <FrameComponent6 />
      <main className={styles.viewMyTicketsButton}>
        <section className={styles.winningNumberLabel}>
          <FrameComponent7 />
        </section>
        <section className={styles.socials}>
          <div className={styles.socialsChild} />
          <img
            className={styles.socialsItem}
            loading="lazy"
            alt=""
            src="/rectangle-150@2x.png"
          />
          <div className={styles.socialsInner}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <div className={styles.howItWorksFeaturedPartnersWrapper}>
                <img
                  className={styles.howItWorksFeaturedPartners}
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group.svg"
              />
              <div className={styles.ourVisionIsToProvideConveWrapper}>
                <img
                  className={styles.ourVisionIsToProvideConve}
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard1;
