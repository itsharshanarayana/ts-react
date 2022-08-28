import styles from './post-detail.module.css';
import React, {useState} from "react";
import {Post} from "../posts/posts";
import {useQuery} from "react-query";
import {fetchComments} from "../../posts-service";
import Comments from "../comments/comments";

/* eslint-disable-next-line */
export interface PostDetailProps {
  post: Post
}

export interface CommentDetail {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostDetail: React.FC<PostDetailProps> = ({post}) => {

  // replace with useQuery
  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery<CommentDetail[] | null>(
    //["comments", post.id],
    `comments-${post.id}`,
    () => fetchComments(post.id),
    {
      staleTime: 1000
    }
  );

  if (isLoading) return <h4>Loading ...</h4>;

  if (isError) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const errorStr = error.toString();
    return <h4>Error: {errorStr}</h4>;
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data?.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}

export default PostDetail;
