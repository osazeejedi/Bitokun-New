import { FunctionComponent } from "react";
import styles from "./FrameComponent9.module.css";

const FrameComponent9: FunctionComponent = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.eTHLabelWrapper}>
        <img
          className={styles.eTHLabel}
          loading="lazy"
          alt=""
          src="/frame-2@2x.png"
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.dashboardParent}>
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.lineWrapper}>
            <div className={styles.frameChild} />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.savingsPoolParent}>
          <div className={styles.savingsPool}>Savings Pool</div>
          <div className={styles.lotteryPool}>Lottery Pool</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.ethereumWrapper}>
          <div className={styles.ethereum}>ETHEREUM</div>
        </div>
        <img
          className={styles.linearArrowsAltArrowRi}
          alt=""
          src="/linear--arrows--alt-arrow-right-3@2x.png"
        />
      </div>
      <div className={styles.yourSavingsYourTicketsLabeParent}>
        <div className={styles.yourSavingsYourTicketsLabe}>
          <div className={styles.x7fd7296bfc07503}>0x7fD7296Bfc07503</div>
        </div>
        <img
          className={styles.totalSavingsPrizePoolLabel}
          alt=""
          src="/rectangle-190@2x.png"
        />
        <img
          className={styles.linearArrowsAltArrowRi1}
          alt=""
          src="/linear--arrows--alt-arrow-right-12.svg"
        />
      </div>
    </header>
  );
};

export default FrameComponent9;
