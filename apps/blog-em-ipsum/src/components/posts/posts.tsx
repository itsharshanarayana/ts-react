import styles from './posts.module.css';
import React, {useEffect, useState} from "react";

import PostDetail from "../post-detail/post-detail";
import {useQuery, useQueryClient} from "react-query";
import {fetchPosts} from "../../posts-service";

const maxPostPage = 10;

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/* eslint-disable-next-line */
export interface PostsProps {
}

const Posts: React.FC<PostsProps> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Get reference to queryClient.
  const queryClient = useQueryClient();

  const onPostClick = (post: Post) => {
    setSelectedPost(post);
    console.log("Selected post:", selectedPost);
  };

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(
        ["posts", nextPage],
        () => fetchPosts(nextPage), {
          staleTime: 2000,
        }
      );
    }
  }, [currentPage, queryClient]);

  // replace with useQuery
  const {
    data,
    isError,
    error,
    isLoading,
    isFetching,
  } = useQuery<Post[] | null>(["posts", currentPage], () => fetchPosts(currentPage), {
    staleTime: 0
  });

  if (isLoading) return <h4>Loading ...</h4>

  if (isFetching) return <h4>Fetching data ...</h4>

  if (isError) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const errorString: string = error.toString();
    return (
      <h4>
        Error ...{errorString}
      </h4>)
  }

  return (
    <>
      <ul>
        {
          data?.map((post) => (
            <li
              key={post.id}
              className="post-title"
              onClick={() => onPostClick(post)}
            >
              {post.title}
            </li>
          ))
        }
      </ul>
      <div className="pages">
        <button disabled={currentPage <= 1}
                onClick={() => {
                  console.log('Button clicked');
                  setCurrentPage(previousValue => previousValue - 1);
                }}>
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= maxPostPage}
          onClick={() => {
            console.log('current page + 1');
            setCurrentPage(previousValue => previousValue + 1)
          }}>
          Next page
        </button>
      </div>
      <hr/>
      {selectedPost && <PostDetail post={selectedPost}/>}
    </>
  );
}

export default Posts;
