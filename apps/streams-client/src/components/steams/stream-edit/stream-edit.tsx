import styles from './stream-edit.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface StreamEditProps {
}

export interface StreamEditState {
}

class StreamEdit extends React.Component<StreamEditProps, StreamEditState> {
  override render() {
    return (
      <div className={styles['container']}>
        <h3>Welcome to StreamEdit!</h3>
      </div>
    );
  }
}

export default StreamEdit;
