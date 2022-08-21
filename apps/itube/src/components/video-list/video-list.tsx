import styles from './video-list.module.css';
import {IVideoItem} from "../../types/app-types";
import React from "react";
import VideoItem from "../video-item/video-item";
import {Box, ImageList, List, Typography} from "@mui/material";

/* eslint-disable-next-line */
export interface VideoListProps {
  videos: IVideoItem[];
  onVideoSelected: (video: IVideoItem) => void;
}

const VideoList: React.FC<VideoListProps> = ({videos, onVideoSelected}) => {

  const renderVideos = () => {
    return videos.map(v => <VideoItem video={v} onVideoSelected={onVideoSelected} key={v.id.videoId}/>);
  };

  return (
    <div className={styles['container']}>
      {renderVideos()}
    </div>
  );
}

export default VideoList;
