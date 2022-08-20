import styles from './video-item.module.css';

/* eslint-disable-next-line */
export interface VideoItemProps {}

export function VideoItem(props: VideoItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to VideoItem!</h1>
    </div>
  );
}

export default VideoItem;
