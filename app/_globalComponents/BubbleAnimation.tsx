import React from "react";
import styles from "../../styles/Style.module.css";
const BubbleAnimation = ({ children }: any) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      <div>
        <span className={styles.dot}></span>
      </div>
      {children}
    </div>
  );
};

export default BubbleAnimation;
