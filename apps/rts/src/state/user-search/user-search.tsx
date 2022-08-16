import styles from './user-search.module.css';
import React, {useState} from "react";

/* eslint-disable-next-line */
export interface UserSearchProps {}

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC<UserSearchProps> = (props) => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();


  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    })

    console.log('User:', foundUser);
    setUser(foundUser);

  };

  return (
    <div className={styles['container']}>
      <h1>Welcome to UserSearch!</h1>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={onClick}>Find User</button>
      <br/>
      <br/>
      <div>
        <p>Name: {user && user.name}</p>
        <p>Age: {user && user.age}</p>
      </div>
    </div>
  );
}

export default UserSearch;
