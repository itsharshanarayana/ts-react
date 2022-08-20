import styles from './image-card.module.css';
import React from "react";
import {ImageObject} from "../../app/app";

/* eslint-disable-next-line */
export interface ImageCardProps {
  image: ImageObject
}

export interface ImageCardState {
  spans: number;
}

class ImageCard extends React.Component<ImageCardProps, ImageCardState> {

  private readonly imageRef: React.RefObject<HTMLImageElement> | undefined;

  override state: ImageCardState = { spans: 0 };

  constructor(props: ImageCardProps) {
    super(props);
    this.imageRef = React.createRef();
  }

  override componentDidMount() {
    this.imageRef?.current?.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef?.current?.clientHeight;
    height ? this.setState({spans: Math.ceil(height/10)}) : this.setState({ spans: 0 });
  };

  override render() {
    const {description, urls} = this.props.image;
    return (
      <div className={styles['container']} style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular}/>
      </div>
    );
  }
}

export default ImageCard;
