import styles from './video-detail.module.css';
import {IVideoItem} from "../../types/app-types";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";

/* eslint-disable-next-line */
export interface VideoDetailProps {
  selectedVideo?: IVideoItem;
}

const VideoDetail: React.FC<VideoDetailProps> = ({selectedVideo}) => {
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo?.id.videoId}`;
  console.log("Video source:", videoSrc);
  return (
    <div className={styles['container']} key={selectedVideo?.id.videoId}>
      <Card sx={{maxWidth: 345}}>
        <div>
          <iframe src={videoSrc} width="100%" height="100%"></iframe>
        </div>
        <div>
          <Typography variant="body1" gutterBottom>{selectedVideo?.snippet.title}</Typography>
          <Typography variant="subtitle1">{selectedVideo?.snippet.description}</Typography>
        </div>
      </Card>
    </div>
  );
}

export default VideoDetail;
