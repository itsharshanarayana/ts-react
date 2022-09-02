import styles from './species.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface SpeciesProps {}

const Species: React.FC<SpeciesProps> = (props) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Species!</h1>
    </div>
  );
}

export default Species;
