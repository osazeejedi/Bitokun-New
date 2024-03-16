import { FunctionComponent } from "react";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import SavingsContractAddress from "../components/SavingsContractAddress";
import styles from "./Dashboard2.module.css";

const Dashboard2: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <form className={styles.frameParent}>
        <FrameComponent9 />
        <FrameComponent8 />
      </form>
      <div className={styles.savingsContractAddressWrapper}>
        <SavingsContractAddress />
      </div>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/rectangle-150@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.vectorParent}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <div className={styles.vectorWrapper}>
              <img
                className={styles.vectorIcon1}
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
            <div className={styles.vectorContainer}>
              <img
                className={styles.vectorIcon2}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard2;
