import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import ClaimPrizeButton from "../components/ClaimPrizeButton";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <FrameComponent6 />
      <main className={styles.winningNumberLabelParent}>
        <section className={styles.winningNumberLabel}>
          <ClaimPrizeButton />
        </section>
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/rectangle-150@2x.png"
          />
          <div className={styles.nAWrapper}>
            <div className={styles.nA}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <div className={styles.nA1}>
                <img
                  className={styles.nAIcon}
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
              <div className={styles.nA2}>
                <img
                  className={styles.nAIcon1}
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <img
                className={styles.nAChild}
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

export default Dashboard;
