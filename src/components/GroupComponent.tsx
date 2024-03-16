import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  totalSavings?: string;
  prop?: string;
  yourSavings?: string;
  prop1?: string;
  expectedAPY5PerYear?: string;
  prop2?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  totalSavings,
  prop,
  yourSavings,
  prop1,
  expectedAPY5PerYear,
  prop2,
  propMinWidth,
  propWidth,
  propMinWidth1,
  propWidth1,
  propMinWidth2,
}) => {
  const yoursVsTotalStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth1,
    };
  }, [propWidth, propMinWidth1]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth2,
    };
  }, [propWidth1, propMinWidth2]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.prizeWonLabel}>
        <div className={styles.prizeWonLabelChild} />
        <div className={styles.claimPrizeLabel}>
          <div className={styles.claimPrizeLabelChild} />
          <div className={styles.totalSavings}>{totalSavings}</div>
          <div className={styles.yoursVsTotal} style={yoursVsTotalStyle}>
            {prop}
          </div>
        </div>
        <div className={styles.yourTicketsLabelWrapper}>
          <div className={styles.yourTicketsLabel}>
            <div className={styles.yourSavings}>{yourSavings}</div>
            <div className={styles.div} style={div2Style}>
              {prop1}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.expectedApy5PerYearParent}>
          <div className={styles.expectedApy}>{expectedAPY5PerYear}</div>
          <div className={styles.button} style={buttonStyle}>
            {prop2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
