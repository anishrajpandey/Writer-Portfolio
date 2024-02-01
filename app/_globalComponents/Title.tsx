import React from "react";
import styles from "../../styles/Title.module.css";

const Title = ({ children }: { children: any }) => {
  return (
    <div className={styles.content}>
      <h2>{children}</h2>
    </div>
  );
};

export default Title;
