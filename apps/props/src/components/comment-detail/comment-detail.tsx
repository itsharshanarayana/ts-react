import styles from './comment-detail.module.css';
import React from "react";

/* eslint-disable-next-line */
interface CommentDetailProps {
  name: string;
  pic: string;
  updateTime: string;
  comment: string;
}

const CommentDetail: React.FC<CommentDetailProps> = ({
                                                       name,
                                                       pic,
                                                       updateTime,
                                                       comment
                                                     }) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={pic} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {name}
          </a>
          <div className="metadata">
            <span className="date">{updateTime}</span>
          </div>
          <div className="text">
            {comment}
          </div>
        </div>
      </div>

    </div>
  );
}

export default CommentDetail;
