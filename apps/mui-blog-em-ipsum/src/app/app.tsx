// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {Typography} from "@mui/material";
import React from "react";
import Posts from "./components/posts/posts";

const App: React.FC = () => {

  return (
    <>
      <div className={styles['container']}>
        <Typography variant="h5">Blog Em Ipsum - with MUI</Typography>
        <Posts />
      </div>
    </>
  );
}

export default App;
