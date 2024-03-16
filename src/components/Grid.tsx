import { FunctionComponent } from "react";
import styles from "./Grid.module.css";

const Grid: FunctionComponent = () => {
  return (
    <section className={styles.grid}>
      <div className={styles.gridChild} />
      <div className={styles.gridInner}>
        <div className={styles.frameParent}>
          <div className={styles.howItWorksWrapper}>
            <h1 className={styles.howItWorks}>{`How it works, `}</h1>
          </div>
          <div className={styles.swiftnessAvailableOn}>
            Swiftness available on low fees, advanced accessibility all over
            globe.
          </div>
        </div>
      </div>
      <div className={styles.square}>
        <div className={styles.triangle}>
          <div className={styles.oval}>
            <div className={styles.wrapper}>
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.depositWrapper}>
                <h2 className={styles.deposit}>Deposit</h2>
              </div>
              <div
                className={styles.depositIntoThe}
              >{`Deposit into the savings pool to receive free lottery tickets. `}</div>
            </div>
          </div>
          <div className={styles.oval1}>
            <div className={styles.svgrepoiconcarrierWrapper}>
              <div className={styles.svgrepoiconcarrier}>2</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.joinLotteryPoolWrapper}>
                <h2 className={styles.joinLotteryPool}>Join Lottery Pool</h2>
              </div>
              <div
                className={styles.joinTheLottery}
              >{`Join the lottery pool to select and edit your tickets. `}</div>
            </div>
          </div>
          <div className={styles.oval2}>
            <div className={styles.container}>
              <div className={styles.div1}>3</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.checkForPrizesWrapper}>
                <h2 className={styles.checkForPrizes}>CHECK FOR PRIZES</h2>
              </div>
              <div className={styles.completeSelectionOf}>
                Complete selection of tickets and wait for the draw to end.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.squareInner}>
          <div className={styles.frameParent1}>
            <div className={styles.rectangleWrapper}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/rectangle-232@2x.png"
              />
            </div>
            <div className={styles.svgrepoiconcarrierContainer}>
              <img
                className={styles.svgrepoiconcarrier1}
                loading="lazy"
                alt=""
                src="/rectangle-233@2x.png"
              />
            </div>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-457@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
