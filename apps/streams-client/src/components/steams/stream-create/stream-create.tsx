import styles from './stream-create.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface StreamCreateProps {
}

export interface StreamCreateState {
}

class StreamCreate extends React.Component<StreamCreateProps, StreamCreateState> {

  override render() {
    return (
      <div className={styles['container']}>
        <h3>Welcome to StreamCreate!</h3>
      </div>
    );
  }
}

export default StreamCreate;
