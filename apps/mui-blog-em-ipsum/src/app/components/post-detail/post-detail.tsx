import styles from './post-detail.module.css';
import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Post} from "../posts/posts";
import PostCard from "../post-card/post-card";
import PostModal from "../post-modal/post-modal";

/* eslint-disable-next-line */
export interface PostDetailProps {
  post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({post}) => {
  const onPostCardClick = () => {
    return (
      <PostModal message=""/>
    );
  };

  const renderedPost = () => {
    return (
      <div onClick={onPostCardClick}>
        <PostCard post={post}/>
      </div>
    );
  };

  return (
    <div className={styles['container']}>
      {renderedPost()}
    </div>
  );
}

export default PostDetail;
