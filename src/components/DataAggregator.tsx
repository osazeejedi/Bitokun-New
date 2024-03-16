import { FunctionComponent } from "react";
import ToggleSwitch1 from "./ToggleSwitch1";
import ToggleSwitch from "./ToggleSwitch";
import styles from "./DataAggregator.module.css";

const DataAggregator: FunctionComponent = () => {
  return (
    <div className={styles.dataAggregator}>
      <div className={styles.dataAggregatorChild} />
      <div className={styles.winningCriteriaWrapper}>
        <h1 className={styles.winningCriteria}>Winning Criteria</h1>
      </div>
      <div className={styles.inputFieldSet}>
        <div className={styles.dividerCollection}>
          <div className={styles.linkList}>
            <div className={styles.shapeSet}>
              <div className={styles.prizeFundsParent}>
                <div className={styles.prizeFunds}>Prize Funds</div>
                <div className={styles.thePrizesFor}>
                  The prizes for each lottery round come from four sources;
                </div>
              </div>
            </div>
            <div className={styles.prizeInjectionsPrizeContainer}>
              <p className={styles.prizeInjections}>Prize Injections</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.prizeFundsAre}>
                Prize funds are manually injected into the lottery pool within a
                period of time.
              </p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.ticketPurchases}>{`Ticket Purchases `}</p>
              <p className={styles.blankLine3}>&nbsp;</p>
              <p className={styles.ofTheTickets}>
                50% of the tickets purchased are injected into the prize pool on
                a daily basis.
              </p>
              <p className={styles.blankLine4}>&nbsp;</p>
              <p className={styles.blankLine5}>&nbsp;</p>
              <p className={styles.reservePool}>Reserve Pool</p>
              <p className={styles.blankLine6}>&nbsp;</p>
              <p className={styles.ofThePrize}>
                20% of the prize pool is reserved every round and distributed to
                the next round.
              </p>
              <p className={styles.blankLine7}>&nbsp;</p>
              <p className={styles.blankLine8}>&nbsp;</p>
              <p className={styles.blankLine9}>&nbsp;</p>
              <p className={styles.rolloverPrizes}>Rollover Prizes</p>
              <p className={styles.blankLine10}>&nbsp;</p>
              <p className={styles.afterEveryRound}>
                After every round, if nobody wins in one of our prize brackets,
                the unclaimed prizes roll over to the next round.
              </p>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.prizePoolAllocation}>
              PRIZE POOL ALLOCATION
            </div>
            <div className={styles.toggleSwitchParent}>
              <ToggleSwitch1
                dataTransformer="/rectangle-174@2x.png"
                winningNumbers="6 Winning Numbers"
                prop="40%"
              />
              <ToggleSwitch1
                dataTransformer="/rectangle-175@2x.png"
                winningNumbers="5 Winning Numbers"
                prop="20%"
                propDebugCommit="unset"
                propDebugCommit1="unset"
                propWidth="28px"
                propMinWidth="28px"
              />
              <ToggleSwitch
                dataTransformer="/rectangle-176@2x.png"
                winningNumbers="4 Winning Numbers"
                prop="10%"
              />
              <ToggleSwitch
                dataTransformer="/rectangle-178@2x.png"
                winningNumbers="3 Winning Numbers"
                prop="5%"
                propPadding="var(--padding-0) var(--padding-11xs) var(--padding-0) var(--padding-12xs)"
                propDebugCommit="unset"
                propDebugCommit1="unset"
                propWidth="19px"
                propMinWidth="19px"
              />
              <ToggleSwitch1
                dataTransformer="/rectangle-177@2x.png"
                winningNumbers="2 Winning Numbers"
                prop="3%"
                propDebugCommit="unset"
                propDebugCommit1="unset"
                propWidth="20px"
                propMinWidth="20px"
              />
              <ToggleSwitch
                dataTransformer="/rectangle-179@2x.png"
                winningNumbers="1 Winning Numbers"
                prop="2%"
                propPadding="var(--padding-0) var(--padding-12xs) var(--padding-0) var(--padding-11xs)"
                propDebugCommit="unset"
                propDebugCommit1="unset"
                propWidth="19px"
                propMinWidth="19px"
              />
              <ToggleSwitch1
                dataTransformer="/rectangle-174@2x.png"
                winningNumbers="Reserve Pool"
                prop="20%"
                propDebugCommit="unset"
                propDebugCommit1="unset"
                propWidth="28px"
                propMinWidth="28px"
              />
            </div>
          </div>
        </div>
        <div className={styles.stackLayout}>
          <div className={styles.flowLayout}>
            <div className={styles.theDigitsOn}>
              The digits on your ticket must match in the correct order to win.
            </div>
            <div className={styles.heresAnExample}>
              Here’s an example lottery draw, with two tickets, A and B.
            </div>
            <div className={styles.ticketATheContainer}>
              <p
                className={styles.ticketAThe}
              >{`Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, `}</p>
              <p className={styles.soThisTicket}>
                so this ticket only wins a “Match first 3” prize.
              </p>
            </div>
            <div className={styles.ticketBEvenContainer}>
              <p
                className={styles.ticketBEven}
              >{`Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket `}</p>
              <p className={styles.doesntWinA}>doesn’t win a prize.</p>
            </div>
            <div className={styles.prizeBracketsDontContainer}>
              <p
                className={styles.prizeBracketsDont}
              >{`Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes `}</p>
              <p className={styles.fromTheMatch}>
                from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match
                2’.
              </p>
            </div>
          </div>
          <div className={styles.rowLayout}>
            <div className={styles.rowLayoutChild} />
            <div className={styles.frameParent}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.transparentBox}>
                  <img
                    className={styles.transparentBoxChild}
                    alt=""
                    src="/rectangle-165@2x.png"
                  />
                  <b className={styles.filledBox}>8</b>
                </div>
                <div className={styles.transparentBox1}>
                  <img
                    className={styles.transparentBoxItem}
                    alt=""
                    src="/rectangle-166@2x.png"
                  />
                  <b className={styles.b}>1</b>
                </div>
                <div className={styles.transparentBox2}>
                  <img
                    className={styles.transparentBoxInner}
                    alt=""
                    src="/rectangle-167@2x.png"
                  />
                  <b className={styles.b1}>5</b>
                </div>
                <div className={styles.transparentBox3}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-169@2x.png"
                  />
                  <b className={styles.b2}>5</b>
                </div>
                <div className={styles.transparentBox4}>
                  <img
                    className={styles.transparentBoxChild1}
                    alt=""
                    src="/rectangle-168@2x.png"
                  />
                  <b className={styles.b3}>2</b>
                </div>
                <div className={styles.transparentBox5}>
                  <img
                    className={styles.transparentBoxChild2}
                    alt=""
                    src="/rectangle-170@2x.png"
                  />
                  <b className={styles.b4}>0</b>
                </div>
              </div>
              <div className={styles.shadowedBoxWrapper}>
                <div className={styles.shadowedBox}>
                  <div className={styles.roundedBox}>
                    <img
                      className={styles.hiconLinearTickCircle}
                      loading="lazy"
                      alt=""
                      src="/hicon--linear--tick-circle.svg"
                    />
                    <img
                      className={styles.hiconLinearTickCircle1}
                      loading="lazy"
                      alt=""
                      src="/hicon--linear--tick-circle.svg"
                    />
                    <img
                      className={styles.hiconLinearTickCircle2}
                      loading="lazy"
                      alt=""
                      src="/hicon--linear--tick-circle.svg"
                    />
                    <img
                      className={styles.hiconLinearCloseCircle}
                      loading="lazy"
                      alt=""
                      src="/hicon--linear--close-circle.svg"
                    />
                    <img
                      className={styles.hiconLinearTickCircle3}
                      alt=""
                      src="/hicon--linear--tick-circle.svg"
                    />
                    <img
                      className={styles.hiconLinearTickCircle4}
                      alt=""
                      src="/hicon--linear--tick-circle.svg"
                    />
                  </div>
                  <div className={styles.scaledBox}>
                    <div className={styles.rotatedBox}>
                      <div className={styles.patternBox}>
                        <b className={styles.a}>A</b>
                      </div>
                      <div className={styles.maskedImage}>
                        <div className={styles.clipPathShape}>
                          <div className={styles.clipPathShapeChild} />
                          <b className={styles.starShape}>8</b>
                          <b className={styles.starShape1}>1</b>
                          <b className={styles.starShape2}>5</b>
                        </div>
                        <div className={styles.circleShapeWrapper}>
                          <b className={styles.circleShape}>9</b>
                        </div>
                      </div>
                      <div className={styles.opacityBox}>
                        <b className={styles.gradientBox}>2</b>
                      </div>
                      <div className={styles.opacityBox1}>
                        <b className={styles.b5}>0</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.hiconLinearCloseCircleParent}>
                  <img
                    className={styles.hiconLinearCloseCircle1}
                    loading="lazy"
                    alt=""
                    src="/hicon--linear--close-circle.svg"
                  />
                  <img
                    className={styles.hiconLinearTickCircle5}
                    loading="lazy"
                    alt=""
                    src="/hicon--linear--tick-circle.svg"
                  />
                  <img
                    className={styles.hiconLinearTickCircle6}
                    loading="lazy"
                    alt=""
                    src="/hicon--linear--tick-circle.svg"
                  />
                  <img
                    className={styles.hiconLinearTickCircle7}
                    loading="lazy"
                    alt=""
                    src="/hicon--linear--tick-circle.svg"
                  />
                  <img
                    className={styles.hiconLinearTickCircle8}
                    loading="lazy"
                    alt=""
                    src="/hicon--linear--tick-circle.svg"
                  />
                  <img
                    className={styles.hiconLinearTickCircle9}
                    alt=""
                    src="/hicon--linear--tick-circle.svg"
                  />
                </div>
              </div>
              <div className={styles.dataAggregator1}>
                <div className={styles.conditionSplitter}>
                  <b className={styles.b6}>B</b>
                </div>
                <div className={styles.inputMerge}>
                  <div className={styles.inputMergeChild} />
                  <b className={styles.outputBranch}>9</b>
                  <b className={styles.outputBranch1}>1</b>
                  <b className={styles.outputBranch2}>5</b>
                  <b className={styles.outputBranch3}>9</b>
                  <b className={styles.outputBranch4}>2</b>
                  <b className={styles.outputBranch5}>0</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAggregator;
