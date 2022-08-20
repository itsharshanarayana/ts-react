import styles from './video-list.module.css';

/* eslint-disable-next-line */
export interface VideoListProps {}

export function VideoList(props: VideoListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to VideoList!</h1>
    </div>
  );
}

export default VideoList;
