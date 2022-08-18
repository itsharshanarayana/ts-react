import styles from './spinner.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface SpinnerProps {
  message?: string;
}

const Spinner: React.FC<SpinnerProps> = ({message}) => {
  return (
    <div className={`ui active dimmer`}>
      <div className={`ui big text loader`}>{message}</div>
    </div>
  );
}

export default Spinner;

Spinner.defaultProps = {
  message: 'Loading ...'
}
