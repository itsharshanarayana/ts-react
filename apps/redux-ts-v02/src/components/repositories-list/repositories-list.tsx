import styles from './repositories-list.module.css';
import React from "react";
import {useState} from 'react';
import {useActions} from "../../hooks/useActions";


/* eslint-disable-next-line */
export interface RepositoriesListProps {
}

const RepositoriesList: React.FC<RepositoriesListProps> = (props) => {

  const [term, setTerm] = useState<string>('');
  const {searchRepositories} = useActions();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);

  };

  return (
    <div className={styles['container']}>
      <form onSubmit={onSubmit}>
        <div>
          <input value={term} onChange={e => setTerm(e.target.value)}/>
        </div>
        <br/>
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
}

export default RepositoriesList;
