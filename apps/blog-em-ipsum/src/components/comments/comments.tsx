import styles from './comments.module.css';
import React, {useState} from "react";
import {CommentDetail} from "../post-detail/post-detail";
import {useQuery} from "react-query";
import {fetchComments} from "../../posts-service";
import Comment, {CommentProps} from "../comment/comment";

/* eslint-disable-next-line */
export interface CommentsProps {
  comments: CommentDetail[];
}

const Comments: React.FC<CommentsProps> = ({comments}) => {

  const renderedComments = comments.map(
    c => {
      return (
        <li key={c.id}>
          <Comment comment={c}/>
        </li>
      );
    }
  );

  return (
    <div className={styles['container']}>
      <ul>
      {renderedComments}
      </ul>
    </div>
  );
}

export default Comments;
