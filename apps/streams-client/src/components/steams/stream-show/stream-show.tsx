import styles from './stream-show.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface StreamShowProps {
}

export interface StreamShowState {
}

class StreamShow extends React.Component<StreamShowProps, StreamShowState> {

  override render() {
    return (
      <div className={styles['container']}>
        <h3>Welcome to StreamShow!</h3>
      </div>
    );
  }
}

export default StreamShow;
