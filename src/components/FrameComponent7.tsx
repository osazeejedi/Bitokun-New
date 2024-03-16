import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent4 from "./FrameComponent4";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.dailyPrizeDisplayParent}>
          <div className={styles.dailyPrizeDisplay}>
            <div className={styles.hourSecTimer}>
              <div className={styles.dailyPrize}>Daily Prize</div>
            </div>
            <div className={styles.div}>$10,500</div>
          </div>
          <FrameComponent5
            prop="12"
            prop1="25"
            prop2="30"
            propPadding="var(--padding-0) var(--padding-xl)"
            propPadding1="var(--padding-base) var(--padding-sm)"
            propWidth="22px"
            propMinWidth="22px"
            propPadding2="var(--padding-base) var(--padding-sm)"
            propWidth1="22px"
            propMinWidth1="22px"
            propPadding3="var(--padding-base) var(--padding-sm)"
            propWidth2="22px"
            propMinWidth2="22px"
          />
          <div className={styles.frameContainer}>
            <div className={styles.frameParent}>
              <div className={styles.joinLotteryPoolNowWrapper}>
                <div className={styles.joinLotteryPool}>
                  JOIN LOTTERY POOL NOW
                </div>
              </div>
              <div className={styles.logoImage}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.myTlckets10Wrapper}>
                    <div className={styles.myTlckets10}>MY TlCKETS- 10</div>
                  </div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <div className={styles.playLottery}>Play Lottery</div>
                  </div>
                </div>
                <div className={styles.spacerElement}>
                  <div className={styles.vlewMyTlckets}>VlEW MY TlCKETS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent4
        group487="/rectangle-236@2x.png"
        propGap="53.5px"
        propHeight="294px"
        propHeight1="unset"
        propPadding="var(--padding-0) var(--padding-27xl) var(--padding-0) var(--padding-30xl)"
        propFlex="1"
        propHeight2="79px"
        propPadding1="var(--padding-0) var(--padding-0) var(--padding-0) var(--padding-12xs)"
      />
      <div className={styles.viewMyTicketsBtn}>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.claimPrize}>Claim Prize</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
