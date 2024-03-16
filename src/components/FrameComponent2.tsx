import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src="/group-9@2x.png" />
      <h1 className={styles.lottery}>Lottery</h1>
      <h1 className={styles.pool}>Pool</h1>
      <div className={styles.dropdownMenu}>
        <button className={styles.joinLotteryWrapper}>
          <div className={styles.joinLottery}>Join Lottery</div>
        </button>
        <div className={styles.ticketsSoldWrapper}>
          <div className={styles.ticketsSold}>533,984 Tickets Sold</div>
        </div>
      </div>
      <div className={styles.bitokunDecentralizedLotteryContainer}>
        <p
          className={styles.bitokunDecentralizedLottery}
        >{`Bitokun decentralized lottery system `}</p>
        <p
          className={styles.isASmart}
        >{`is a smart contract enabled system that allows players `}</p>
        <p
          className={styles.toUseOur}
        >{`to use our allocated lottery tickets to participate in our daily lottery pools. `}</p>
      </div>
      <img
        className={styles.plateIcon}
        loading="lazy"
        alt=""
        src="/plate@2x.png"
      />
    </div>
  );
};

export default FrameComponent2;
