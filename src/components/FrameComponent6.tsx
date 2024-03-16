import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.codeWrapper}>
        <img
          className={styles.codeIcon}
          loading="lazy"
          alt=""
          src="/frame-2@2x.png"
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.dashboardParent}>
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.savingsPool}>Savings Pool</div>
        </div>
      </div>
      <div className={styles.ethereumSymbolWrapper}>
        <div className={styles.ethereumSymbol}>
          <div className={styles.lotteryPool}>Lottery Pool</div>
          <div className={styles.buttonConfirmWrapper}>
            <div className={styles.buttonConfirm} />
          </div>
        </div>
      </div>
      <div className={styles.code}>
        <div className={styles.dailyPrizeLabel}>
          <div className={styles.ethereum}>ETHEREUM</div>
        </div>
        <img
          className={styles.linearArrowsAltArrowRi}
          alt=""
          src="/linear--arrows--alt-arrow-right-3@2x.png"
        />
      </div>
      <div className={styles.tittle}>
        <div className={styles.x7fd7296bfc07503Wrapper}>
          <div className={styles.x7fd7296bfc07503}>0x7fD7296Bfc07503</div>
        </div>
        <img
          className={styles.tittleChild}
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

export default FrameComponent6;
