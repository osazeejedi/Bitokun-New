import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent4 from "./FrameComponent4";
import styles from "./ClaimPrizeButton.module.css";

const ClaimPrizeButton: FunctionComponent = () => {
  return (
    <div className={styles.claimPrizeButton}>
      <div className={styles.claimPrizeButtonChild} />
      <div className={styles.frameParent}>
        <div className={styles.buyTicketButtonWrapper}>
          <div className={styles.buyTicketButton}>
            <div className={styles.viewMyTicketsLabel}>
              <div className={styles.dailyPrize}>Daily Prize</div>
            </div>
            <div className={styles.div}>$10,500</div>
          </div>
        </div>
        <FrameComponent5 prop="0" prop1="0" prop2="0" />
        <div className={styles.joinLotteryPoolNowWrapper}>
          <div className={styles.joinLotteryPool}>JOIN LOTTERY POOL NOW</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.viewMyTicketsHeader}>
            <div className={styles.myTlckets0}>MY TlCKETS- 0</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.playLottery}>Play Lottery</div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.buyTicket}>Buy Ticket</div>
          </div>
        </div>
        <div className={styles.vlewMyTlcketsWrapper}>
          <div className={styles.vlewMyTlckets}>VlEW MY TlCKETS</div>
        </div>
      </div>
      <div className={styles.winnerArea}>
        <FrameComponent4 group487="/group-487.svg" />
        <div className={styles.winnerAreaInner}>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.claimPrize}>Claim Prize</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimPrizeButton;
