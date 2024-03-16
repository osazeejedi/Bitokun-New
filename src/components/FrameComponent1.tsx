import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src="/group-8@2x.png" />
      <img className={styles.ethIcon} loading="lazy" alt="" src="/eth@2x.png" />
      <div className={styles.dividerWrapper}>
        <div className={styles.divider}>
          <div className={styles.viewMore}>ViEW MORE</div>
          <div className={styles.inputField}>
            <img
              className={styles.linearArrowsAltArrowRi}
              loading="lazy"
              alt=""
              src="/linear--arrows--alt-arrow-right@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
