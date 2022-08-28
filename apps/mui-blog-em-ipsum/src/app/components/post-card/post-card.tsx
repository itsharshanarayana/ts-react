import styles from './post-card.module.css';
import React from "react";
import {Post} from "../posts/posts";
import {Card, CardContent, Typography} from "@mui/material";
import PostModal from "../post-modal/post-modal";

/* eslint-disable-next-line */
export interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({post}) => {

  return (
    <div className={styles['container']}>
      <Card
        sx={{minWidth: 345, border: '1px solid lightblue'}}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostCard;
