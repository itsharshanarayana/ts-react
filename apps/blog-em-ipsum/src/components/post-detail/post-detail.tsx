// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import styles from './post-detail.module.css';
import React, {useState} from "react";
import {Post} from "../posts/posts";
import {useMutation, useQuery} from "react-query";
import {deletePost, fetchComments, updatePost} from "../../posts-service";

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

  const deleteMutation = useMutation(
    (postId: number) => deletePost(postId)
  );
  const postMutation = useMutation(
    "posts",
    (postId: number) => updatePost(postId)
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

      <button onClick={
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        () => deleteMutation.mutate(post.id)
      }>Delete</button>
      {
        deleteMutation.isError && (
          <p style={{ color: 'red'}}>Error deleting the post</p>
        )
      }

      {
        deleteMutation.isLoading && (
          <p style={{ color: 'purple'}}>Deleting the post ...</p>
        )
      }
      {
        deleteMutation.isSuccess && (
          <p style={{ color: 'green'}}>Deleting the post was successful!</p>
        )
      }

      <button
        onClick={() => postMutation.mutate(post.id)}
      >Update title</button>
      {
        postMutation.isError && (
          <p style={{ color: 'red' }}>Error updating the post!</p>
        )
      }
      {
        postMutation.isLoading && (
          <p style={{ color: 'purple' }}>Updating the post ...</p>
        )
      }
      {
        postMutation.isSuccess && (
          <p style={{ color: 'green' }}>Post updated successfully!</p>
        )
      }
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
