import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./FrameComponent8.module.css";

const FrameComponent8: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <GroupComponent
            totalSavings="Total Savings"
            prop="$50,000.00"
            yourSavings="Your Savings"
            prop1="$500.00"
            expectedAPY5PerYear="Expected APY - 5% (per year)"
            prop2="$25.00"
          />
          <div className={styles.frameContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.deposit}>Deposit</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.withdraw}>Withdraw</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <GroupComponent
            totalSavings="Total Prize Pool "
            prop="$15,000.00"
            yourSavings="Your Tickets "
            prop1="25"
            expectedAPY5PerYear="Tickets Played "
            prop2="8"
            propMinWidth="75px"
            propWidth="18px"
            propMinWidth1="18px"
            propWidth1="10px"
            propMinWidth2="10px"
          />
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.playLottery}>Play Lottery</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.buyTicket}>Buy Ticket</div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
            <div className={styles.prizeWon}>Prize Won</div>
            <div className={styles.div}>$500.00</div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild2} />
            <div className={styles.claimPrize}>Claim Prize</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
