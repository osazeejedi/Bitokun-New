import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  propMarginTop,
}) => {
  const frameFooterStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <footer className={styles.rectangleParent} style={frameFooterStyle}>
      <div className={styles.frameChild} />
      <div className={styles.numberTransform}>
        <div className={styles.imageProcessor}>
          <img
            className={styles.dateFormattingIcon}
            loading="lazy"
            alt=""
            src="/rectangle-150@2x.png"
          />
          <div className={styles.stringConcatenate}>
            <img
              className={styles.svgrepoiconcarrier}
              alt=""
              src="/vector-1.svg"
            />
            <div className={styles.loopControl}>
              <img
                className={styles.variableAssignmentIcon}
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <div className={styles.constantDefinition}>
              <img
                className={styles.ifStatementIcon}
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <img
              className={styles.stringConcatenateChild}
              alt=""
              src="/group-1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.forLoop}>
        <div className={styles.importStatement}>
          <div className={styles.support}>Support</div>
          <div className={styles.liveSupport}>Live Support</div>
          <div className={styles.helpCenter}>Help Center</div>
        </div>
        <div className={styles.whileLoop}>
          <div className={styles.community}>Community</div>
          <div className={styles.blog}>Blog</div>
          <div className={styles.forum}>Forum</div>
          <div className={styles.facebook}>Facebook</div>
          <div className={styles.instagram}>Instagram</div>
          <div className={styles.twitter}>Twitter</div>
          <div className={styles.telegarm}>Telegarm</div>
        </div>
        <div className={styles.whileLoop1}>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
          <div className={styles.licenses}>Licenses</div>
          <div className={styles.amlPolicy}>AML Policy</div>
          <div className={styles.termsOfService}>Terms of Service</div>
          <div className={styles.selfExclusion}>Self Exclusion</div>
          <div className={styles.primedice}>Primedice</div>
        </div>
        <div className={styles.breakStatement}>
          <div className={styles.language}>Language</div>
          <div className={styles.english}>English</div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
