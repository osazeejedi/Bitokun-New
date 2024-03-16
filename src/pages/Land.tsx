import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Grid from "../components/Grid";
import DataAggregator from "../components/DataAggregator";
import FrameComponent from "../components/FrameComponent";
import styles from "./Land.module.css";

const Land: FunctionComponent = () => {
  return (
    <div className={styles.land2}>
      <section className={styles.frameParent}>
        <img className={styles.frameChild} alt="" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.frameItem} />
        <FrameComponent2 />
        <FrameComponent1 />
        <header className={styles.column}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <div className={styles.alignRight}>
            <div className={styles.alignTop}>
              <div className={styles.howItWorks}>How it works</div>
              <div className={styles.aboutLottery}>About Lottery</div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
          </div>
          <button className={styles.canvasParent}>
            <div className={styles.canvas}>
              <div className={styles.dashboard}>DASHBOARD</div>
            </div>
            <img
              className={styles.linearArrowsAltArrowRi}
              alt=""
              src="/linear--arrows--alt-arrow-right-1.svg"
            />
          </button>
        </header>
      </section>
      <Grid />
      <section className={styles.dataAggregatorParent}>
        <DataAggregator />
        <FrameComponent />
      </section>
    </div>
  );
};

export default Land;
