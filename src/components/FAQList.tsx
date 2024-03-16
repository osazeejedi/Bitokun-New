import { FunctionComponent } from "react";
import styles from "./FAQList.module.css";

const FAQList: FunctionComponent = () => {
  return (
    <div className={styles.fAQList}>
      <div className={styles.fAQListInner}>
        <div className={styles.frameParent}>
          <div className={styles.howDoesCryptoSavingsWorkParent}>
            <div
              className={styles.howDoesCrypto}
            >{`How does crypto savings work ? `}</div>
            <img
              className={styles.linearArrowsAltArrowRi}
              loading="lazy"
              alt=""
              src="/linear--arrows--alt-arrow-right-11@2x.png"
            />
          </div>
          <div className={styles.cryptoSavingsIsContainer}>
            <p
              className={styles.cryptoSavingsIs}
            >{`Crypto savings is also known as crypto staking, Staking is when you lock crypto assets for `}</p>
            <p
              className={styles.aSetPeriod}
            >{`a set period of time to help support the operation of a blockchain. `}</p>
            <p className={styles.inReturnFor}>
              In return for staking your crypto, you earn more cryptocurrency.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.lotterySettings}>
        <div className={styles.amountsInfo}>
          <div className={styles.whatIsThe}>
            What is the minimum and maximum amount to save?
          </div>
          <img
            className={styles.linearArrowsAltArrowRi1}
            alt=""
            src="/linear--arrows--alt-arrow-right-2@2x.png"
          />
        </div>
      </div>
      <div className={styles.lotterySettings1}>
        <div className={styles.howLongCanYouSaveParent}>
          <div className={styles.howLongCan}>{`How long can you save? `}</div>
          <img
            className={styles.linearArrowsAltArrowRi2}
            alt=""
            src="/linear--arrows--alt-arrow-right-3@2x.png"
          />
        </div>
      </div>
      <div className={styles.lotterySettings2}>
        <div className={styles.areThereWithdrawalFeesParent}>
          <div className={styles.areThereWithdrawal}>
            Are there withdrawal fees
          </div>
          <img
            className={styles.linearArrowsAltArrowRi3}
            alt=""
            src="/linear--arrows--alt-arrow-right-3@2x.png"
          />
        </div>
      </div>
      <div className={styles.lotterySettings3}>
        <div className={styles.areThereWithdrawalFeesGroup}>
          <div className={styles.areThereWithdrawal1}>
            Are there withdrawal fees
          </div>
          <img
            className={styles.linearArrowsAltArrowRi4}
            alt=""
            src="/linear--arrows--alt-arrow-right-3@2x.png"
          />
        </div>
      </div>
      <div className={styles.lotterySettings4}>
        <div className={styles.howAreTheLotteryTicketsAlParent}>
          <div className={styles.howAreThe}>
            How are the lottery tickets allocated?
          </div>
          <img
            className={styles.linearArrowsAltArrowRi5}
            alt=""
            src="/linear--arrows--alt-arrow-right-3@2x.png"
          />
        </div>
      </div>
      <div className={styles.lotterySettings5}>
        <div className={styles.howDoesTheCryptoLotteryWoParent}>
          <div className={styles.howDoesThe}>
            How does the crypto lottery work?
          </div>
          <img
            className={styles.linearArrowsAltArrowRi6}
            alt=""
            src="/linear--arrows--alt-arrow-right-3@2x.png"
          />
        </div>
      </div>
      <div className={styles.lotterySettings6}>
        <div className={styles.canYouLoseYourCryptoFromParent}>
          <div className={styles.canYouLose}>
            Can you lose your crypto from the lottery?
          </div>
          <img
            className={styles.linearArrowsAltArrowRi7}
            alt=""
            src="/linear--arrows--alt-arrow-right-2@2x.png"
          />
        </div>
      </div>
      <div className={styles.lotterySettings7}>
        <div className={styles.howLongDoesItTakeToWinIParent}>
          <div className={styles.howLongDoes}>
            How long does it take to win in the lottery pool?
          </div>
          <img
            className={styles.linearArrowsAltArrowRi8}
            alt=""
            src="/linear--arrows--alt-arrow-right-3@2x.png"
          />
        </div>
      </div>
      <div className={styles.lotterySettings8}>
        <div className={styles.whatAreLotterySmartContracParent}>
          <div className={styles.whatAreLottery}>
            What are lottery smart contracts?
          </div>
          <img
            className={styles.linearArrowsAltArrowRi9}
            alt=""
            src="/linear--arrows--alt-arrow-right-3@2x.png"
          />
        </div>
      </div>
      <img
        className={styles.helpCenterIcon}
        loading="lazy"
        alt=""
        src="/frame-64@2x.png"
      />
    </div>
  );
};

export default FAQList;
