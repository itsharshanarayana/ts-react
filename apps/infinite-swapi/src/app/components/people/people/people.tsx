import styles from './people.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface PeopleProps {}

const People: React.FC<PeopleProps> = (props) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to People!</h1>
    </div>
  );
}

export default People;
