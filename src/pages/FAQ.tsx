import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FAQList from "../components/FAQList";
import FrameComponent from "../components/FrameComponent";
import styles from "./FAQ.module.css";

const FAQ: FunctionComponent = () => {
  return (
    <div className={styles.faq}>
      <img className={styles.faqChild} alt="" src="/frame-16.svg" />
      <FrameComponent3 />
      <section className={styles.aboutLottery}>
        <div className={styles.minMaxAmount}>
          <div className={styles.frequentlyAskedQuestions}>
            <h1 className={styles.faq1}>FAQ</h1>
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
        </div>
      </section>
      <section className={styles.fAQListWrapper}>
        <FAQList />
      </section>
      <FrameComponent propMarginTop="unset" />
    </div>
  );
};

export default FAQ;
