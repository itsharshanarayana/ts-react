import styles from './image-list.module.css';

/* eslint-disable-next-line */
export interface ImageListProps {}

export function ImageList(props: ImageListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ImageList!</h1>
    </div>
  );
}

export default ImageList;
