import styles from './mui-search.module.css';
import React, {useEffect, useState} from "react";
import {Box, FormControl, Input, InputLabel, Typography} from "@mui/material";
import wikipedia from "../../api/wikipedia";
import MuiCard from "../mui-card/mui-card";
import {WikiSearch} from "../../types";

/* eslint-disable-next-line */
export interface MuiSearchProps {
}

const MuiSearch: React.FC<MuiSearchProps> = (props) => {
  const [term, setTerm] = useState<string>('');
  const [results, setResults] = useState<WikiSearch[]>([]);

  const handleChange = (event:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const makeApiCall = async (): Promise<void> => {
    try {
      const {data} = await wikipedia.get('/w/api.php', {
        params: {
          srsearch: term
        }
      });
      setResults(data?.query?.search);
    } catch (e) {
      console.log('Exception caught while making API call:', e, wikipedia.toString());
    }
  }
  useEffect(() => {
    console.log('useEffect:', term);
    makeApiCall()
      .then(() => {console.log('Successful!!')})
      .catch(() => console.log('Error'))
      .finally(() => {console.log('Executed ...')});
  }, [term]);

  const renderedResults = results?.map(
    r => {
      return (
        <MuiCard
          title={r.title}
          snippet={r.snippet}
          pageUrl={`https://en.wikipedia.org?curid=${r.pageid}`}
          pageId={r.pageid}
          key={r.pageid}
        />
      );
    }
  );

  return (
    <div className={styles['container']}>
      <Typography variant="h4">Welcome to MuiSearch!</Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {m: 1, width: '25ch'},
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <FormControl fullWidth sx={{m: 1}} variant="outlined">
            <InputLabel htmlFor="standard-adornment-amount">Enter Search Term</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={term}
              onChange={handleChange}
            />
          </FormControl>
        </div>
      </Box>
      {renderedResults}
    </div>
  );
}

export default MuiSearch;
