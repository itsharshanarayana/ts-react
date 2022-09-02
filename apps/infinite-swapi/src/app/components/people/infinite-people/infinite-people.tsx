import styles from './infinite-people.module.css';
import React from "react";
import {PeopleProps} from "../people/people";
import {Typography} from "@mui/material";

import InfiniteScroll from "react-infinite-scroller";

/* eslint-disable-next-line */
export interface InfinitePeopleProps {}

const InfinitePeople: React.FC<InfinitePeopleProps> = (props) => {



  return (
    <div className={styles['container']}>
      <Typography variant="h6">Welcome to InfinitePeople!</Typography>
      {/*
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      */}
      <InfiniteScroll></InfiniteScroll>
    </div>
  );
}

export default InfinitePeople;
