import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ToggleSwitch.module.css";

export type ToggleSwitchType = {
  dataTransformer?: string;
  winningNumbers?: string;
  prop?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propDebugCommit?: CSSProperties["debugCommit"];
  propDebugCommit1?: CSSProperties["debugCommit"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ToggleSwitch: FunctionComponent<ToggleSwitchType> = ({
  dataTransformer,
  winningNumbers,
  prop,
  propPadding,
  propDebugCommit,
  propDebugCommit1,
  propWidth,
  propMinWidth,
}) => {
  const toggleSwitchStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const dataTransformerIcon1Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const winningNumbers1Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.toggleSwitch} style={toggleSwitchStyle}>
      <div className={styles.frameParent}>
        <div className={styles.dataTransformerParent}>
          <img
            className={styles.dataTransformerIcon}
            loading="lazy"
            alt=""
            src={dataTransformer}
            style={dataTransformerIcon1Style}
          />
          <div className={styles.popoverContainer}>
            <div className={styles.winningNumbers} style={winningNumbers1Style}>
              {winningNumbers}
            </div>
          </div>
        </div>
        <div className={styles.wrapper} style={frameDivStyle}>
          <div className={styles.div} style={div1Style}>
            {prop}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
