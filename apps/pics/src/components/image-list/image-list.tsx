import styles from './image-list.module.css';
import React from "react";
import {ImageObject} from "../../app/app";

/* eslint-disable-next-line */
export interface ImageListProps {
  images: ImageObject[]
}

const ImageList: React.FC<ImageListProps> = ({images}) => {

  const renderedImages = images.map(
    ({id, description, urls}: ImageObject) => {

      return (
        <div key={id}>
          <img src={urls.small} alt={description}/>
        </div>
      );
    }
  );

  return (
    <div className={styles['container']}>
      {renderedImages}
    </div>
  );
}

export default ImageList;
