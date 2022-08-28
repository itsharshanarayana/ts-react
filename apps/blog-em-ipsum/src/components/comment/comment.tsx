import styles from './comment.module.css';
import React, {useState} from "react";
import {CommentDetail} from "../post-detail/post-detail";

/* eslint-disable-next-line */
export interface CommentProps {
  comment: CommentDetail;
}

const Comment: React.FC<CommentProps> = ({comment}) => {
  console.log("Comments:", comment);
  return (
    <div className={styles['container']}>
      <li key={comment.id}>
        {comment.email}: {comment.body}
      </li>
    </div>
  );
}

export default Comment;
