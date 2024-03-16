import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  group487?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propHeight2?: CSSProperties["height"];
  propPadding1?: CSSProperties["padding"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  group487,
  propGap,
  propHeight,
  propHeight1,
  propPadding,
  propFlex,
  propHeight2,
  propPadding1,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      height: propHeight,
    };
  }, [propGap, propHeight]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propHeight1, propPadding, propFlex]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.rectangleParent} style={frameDiv2Style}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.winningNumber}>Winning Number</div>
      </div>
      <div className={styles.frameWrapper} style={frameDiv3Style}>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src={group487}
          style={groupIconStyle}
        />
      </div>
      <div className={styles.viewMoreWrapper} style={frameDiv4Style}>
        <div className={styles.viewMore}>View more</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
