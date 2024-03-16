import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  prop?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding2?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propPadding3?: CSSProperties["padding"];
  propWidth2?: CSSProperties["width"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  prop,
  prop1,
  prop2,
  propPadding,
  propPadding1,
  propWidth,
  propMinWidth,
  propPadding2,
  propWidth1,
  propMinWidth1,
  propPadding3,
  propWidth2,
  propMinWidth2,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const b1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth1,
    };
  }, [propWidth1, propMinWidth1]);

  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const b2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      minWidth: propMinWidth2,
    };
  }, [propWidth2, propMinWidth2]);

  return (
    <div className={styles.frameWrapper} style={frameDiv1Style}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.hourParent}>
            <div className={styles.hour}>Hour</div>
            <div className={styles.minWrapper}>
              <div className={styles.min}>Min</div>
            </div>
            <div className={styles.sec}>Sec</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent} style={groupDivStyle}>
            <div className={styles.frameChild} />
            <b className={styles.b} style={bStyle}>
              {prop}
            </b>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className={styles.rectangleGroup} style={groupDiv1Style}>
            <div className={styles.frameInner} />
            <b className={styles.b1} style={b1Style}>
              {prop1}
            </b>
          </div>
          <div className={styles.frameWrapper1}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className={styles.rectangleContainer} style={groupDiv2Style}>
            <div className={styles.rectangleDiv} />
            <b className={styles.b2} style={b2Style}>
              {prop2}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
