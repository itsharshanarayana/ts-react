import styles from './infinite-scroll.module.css';

/* eslint-disable-next-line */
export interface InfiniteScrollProps {}

export function InfiniteScroll(props: InfiniteScrollProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InfiniteScroll!</h1>
    </div>
  );
}

export default InfiniteScroll;
