import styles from './stream-list.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface StreamListProps {
}

export interface StreamListState {
}

class StreamList extends React.Component<StreamListProps, StreamListState> {
  override render() {
    return (
      <div className={styles['container']}>
        <h3>Welcome to StreamList!</h3>
      </div>
    );
  }
}

export default StreamList;
