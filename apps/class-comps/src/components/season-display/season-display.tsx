import styles from './season-display.module.css';

/* eslint-disable-next-line */
export interface SeasonDisplayProps {}

export function SeasonDisplay(props: SeasonDisplayProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SeasonDisplay!</h1>
    </div>
  );
}

export default SeasonDisplay;
