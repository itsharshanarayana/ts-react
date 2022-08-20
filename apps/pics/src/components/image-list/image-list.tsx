import styles from './image-list.module.css';
import React from "react";
import {ImageObject} from "../../app/app";
import ImageCard from "../image-card/image-card";

/* eslint-disable-next-line */
export interface ImageListProps {
  images: ImageObject[]
}

const ImageList: React.FC<ImageListProps> = ({images}) => {

  const renderedImages = images.map(image => <ImageCard image={image} key={image.id}/>);

  return (
    <div className={styles['container']}>
      {renderedImages}
    </div>
  );
}

export default ImageList;
