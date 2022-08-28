export const BASE_URL = 'https://jsonplaceholder.typicode.com';

const log = console.log;
const logger = 'posts-service';

const fetchPosts = async (pageNum: number) => {
  const response = await fetch(
    `${BASE_URL}/posts?_limit=10&_page=${pageNum}`
  );
  return response.json();
}

const fetchComments = async (postId: number) => {
  log(logger, ": postId:", postId);

  if (postId) {
    const response = await fetch(
      `${BASE_URL}/comments?postId=${postId}`
    );
    return response.json();
  }
}

const deletePost = async (postId: number) => {
  const response = await fetch(
    `${BASE_URL}/postId/${postId}`,
    {method: "DELETE"}
  );
  return response.json();
}

const updatePost = async (postId: number) => {
  const response = await fetch(
    `${BASE_URL}/postId/${postId}`,
    {
      method: "PATCH",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data: {title: "REACT QUERY FOREVER!!!!"}
    }
  );
  return response.json();
}

export {
  fetchPosts,
  fetchComments,
  deletePost,
  updatePost,
}

