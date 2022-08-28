import styles from './spinner.module.css';
import React from "react";
import {Box, CircularProgress} from "@mui/material";

/* eslint-disable-next-line */
export interface SpinnerProps {}

const Spinner: React.FC<SpinnerProps> = (props) => {
  return (
    <div className={styles['container']}>
      <Box sx={{display: 'flex', minWidth: 345}} style={{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
        <CircularProgress color="secondary" />
      </Box>
    </div>
  );
}

export default Spinner;
