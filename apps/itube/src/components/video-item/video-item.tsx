import styles from './video-item.module.css';
import {IVideoItem} from "../../types/app-types";
import {
  Card, CardContent, CardMedia,
  Typography
} from "@mui/material";
import React from "react";

/* eslint-disable-next-line */
export interface VideoItemProps {
  video: IVideoItem;
  onVideoSelected: (selectedVideo: IVideoItem) => void;
}

const VideoItem: React.FC<VideoItemProps> = ({video, onVideoSelected}) => {

  const onVideoClick = () => {
    onVideoSelected(video);
  };

  return (
    <div className={styles['container']} key={video.id.videoId} onClick={onVideoClick}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="150"
          image={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <CardContent>
          <Typography variant="subtitle1" color="text.primary">
            {video.snippet.title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default VideoItem;
