import React from "react";
import styles from "../../styles/Style.module.css";
const BubbleAnimation = ({ children }: { children: any }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Bubbles Animation</h1>
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
