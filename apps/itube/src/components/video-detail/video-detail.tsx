import styles from './video-detail.module.css';

/* eslint-disable-next-line */
export interface VideoDetailProps {}

export function VideoDetail(props: VideoDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to VideoDetail!</h1>
    </div>
  );
}

export default VideoDetail;
