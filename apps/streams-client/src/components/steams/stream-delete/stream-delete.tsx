import styles from './stream-delete.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface StreamDeleteProps {
}

export interface StreamDeleteState {
}

class StreamDelete extends React.Component<StreamDeleteProps, StreamDeleteState> {

  override render() {
    return (
      <div className={styles['container']}>
        <h3>Welcome to StreamDelete!</h3>
      </div>
    );
  }
}

export default StreamDelete;
