// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Posts, {Post} from "../components/posts/posts";
import {useQuery} from "react-query";
import {fetchPosts} from "../posts-service";
import React, {useState} from "react";

export function App() {

  return (
    <div className={styles['container']}>
      <>
      <h2>Blog Posts App</h2>
      <Posts />
      </>
    </div>
  );
}

export default App;
