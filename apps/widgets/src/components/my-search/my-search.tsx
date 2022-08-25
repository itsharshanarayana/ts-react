import styles from './my-search.module.css';
import React, {useEffect, useState} from "react";

import wikipedia from "../../api/wikipedia";
import axios from "axios";
import MuiCard from "../mui-card/mui-card";

/* eslint-disable-next-line */
export interface MySearchProps {
}

interface SearchInfo {
  totalhits: number;
}

interface Continue {
  continue: string;
  sroffset: number;
}

interface Data {
  data: WikiData;
}

interface WikiData {
  batchcomplete: string;
  continue: Continue;
  query: WikiQuery;
}

interface WikiQuery {
  searchinfo: SearchInfo;
  search: WikiSearch[];
}

interface WikiSearch {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

const MySearch: React.FC<MySearchProps> = (props) => {

  // Set initial state of term state.
  const [term, setTerm] = useState<string>('react');
  const [results, setResults] = useState<WikiSearch[]>([]);

  // Using useEffect hook.
  useEffect(() => {
    // This function will not be invoked automatically.
    const makeApiCall = async () => {
      try {
        const {data} = await wikipedia.get('/w/api.php', {
          params: {
            srsearch: term
          }
        });
        setResults(data.query.search);
      } catch (err) {
        console.log('Exception caught while making API call:', err, wikipedia.toString());
      }
    };

    // make API call to Wikipedia.
    makeApiCall();
  }, [term]);


  const renderedResults = results.map(r => {
    return (
      <MuiCard
        title={r.title}
        snippet={r.snippet}
        pageUrl={`https://en.wikipedia.org?curid=${r.pageid}`}
        pageId={r.pageid}
        key={r.pageid}
      />
      /*<div className="item" key={r.pageid}>
        <div className="content">
          <div className="right floated content">
            <a href={`https://en.wikipedia.org?curid=${r.pageid}`} className="ui button">Go</a>
          </div>
          <div className="header">
            {r.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: r.snippet}}></span>
          {/!*{r.snippet}*!/}
        </div>

      </div>*/
    );
  });

  return (
    <div>
      <div className={`ui form`}>
        <div className="field">
          <label htmlFor="search">Enter Search Term</label>
          <input id="search"
                 type="text"
                 value={term} // controlled element.
                 onChange={e => setTerm(e.target.value)}
                 className="input"
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default MySearch;
