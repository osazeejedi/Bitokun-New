import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ToggleSwitch1.module.css";

export type ToggleSwitch1Type = {
  dataTransformer?: string;
  winningNumbers?: string;
  prop?: string;

  /** Style props */
  propDebugCommit?: CSSProperties["debugCommit"];
  propDebugCommit1?: CSSProperties["debugCommit"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ToggleSwitch1: FunctionComponent<ToggleSwitch1Type> = ({
  dataTransformer,
  winningNumbers,
  prop,
  propDebugCommit,
  propDebugCommit1,
  propWidth,
  propMinWidth,
}) => {
  const dataTransformerIconStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const winningNumbersStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const gridLayoutStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.toggleSwitch}>
      <div className={styles.stepProgress}>
        <img
          className={styles.dataTransformerIcon}
          loading="lazy"
          alt=""
          src={dataTransformer}
          style={dataTransformerIconStyle}
        />
        <div className={styles.tabsContainer}>
          <div className={styles.winningNumbers} style={winningNumbersStyle}>
            {winningNumbers}
          </div>
        </div>
      </div>
      <div className={styles.gridLayout} style={gridLayoutStyle}>
        <div className={styles.div} style={divStyle}>
          {prop}
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch1;
