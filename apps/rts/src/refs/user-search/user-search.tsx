import styles from './user-search.module.css';
import React, {useEffect, useRef, useState} from "react";

interface User {
  name: string;
  age: number;
}

/* eslint-disable-next-line */
export interface UserSearchProps {}

const UserSearch: React.FC<UserSearchProps> = (props) => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<User>();

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const users: User[] = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
  ];

  const onClick = () => {
    const foundUser = users.find(u => u.name === name);
    setName('');
    setUser(foundUser);
  }

  const renderUser = () => {
    return (
      <div>
        {user && user.name}
        <br/>
        {user && user.age}
      </div>
    );
  };

  const onChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className={styles['container']}>
      <h1>Welcome to UserSearch (refs)!</h1>
      <input value={name}
             ref={inputRef}
             onChange={onChange}/>
      <br/>
      <br/>
      <button onClick={onClick}>Find User</button>
      <br/>
      <br/>
      {renderUser()}
    </div>
  );
}

export default UserSearch;
