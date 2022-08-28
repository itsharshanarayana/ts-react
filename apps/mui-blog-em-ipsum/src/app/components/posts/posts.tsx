import styles from './posts.module.css';
import React from "react";
import {Typography} from "@mui/material";
import PostDetail from "../post-detail/post-detail";
import {useQuery} from "react-query";
import {fetchPosts} from "../../services";
import Spinner from "../spinner/spinner";
import PostModal from "../post-modal/post-modal";

/* eslint-disable-next-line */
export interface PostsProps {
}

const maxPostPage = 10;

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostResult {
  data: Post[];
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  error?: Error;
}
const Posts: React.FC<PostsProps> = (props) => {

  const {
    data,
    isLoading,
    isFetching,
    isError,
    error
  } = useQuery<Post[]>(
    ["posts", maxPostPage],
    () => fetchPosts(maxPostPage),
    {
    staleTime: 2000,
  });

  if (isLoading) return (<Spinner />);
  if (isFetching) return (<Spinner />);
  if (isError) {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const errorStr = error?.toString();
    return (
      <div>
        {/*<Typography variant="body1" style={{color: 'red'}}>Error fetching data - {errorStr}</Typography>*/}
        <PostModal message={errorStr}/>
      </div>
    );
  }

  const renderedPosts = data?.map(
    (post: Post) => {
      return (
        <PostDetail post={post} key={post.id}/>
      )
    }
  );

  return (
    <div className={styles['container']}>
      {renderedPosts}
    </div>
  );
}

export default Posts;
