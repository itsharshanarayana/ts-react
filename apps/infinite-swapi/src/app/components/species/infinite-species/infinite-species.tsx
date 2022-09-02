import styles from './infinite-species.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface InfiniteSpeciesProps {}

const InfiniteSpecies: React.FC<InfiniteSpeciesProps> = (props) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InfiniteSpecies!</h1>
    </div>
  );
}

export default InfiniteSpecies;
