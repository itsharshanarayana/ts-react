import styles from './guest-list.module.css';
import React, {useState} from "react";

/* eslint-disable-next-line */
export interface GuestListProps {
}

const GuestList: React.FC<GuestListProps> = (props) => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  const renderGuestsList = () => {
    return (
      <ul>
        {
          guests.map(guest => <li key={guest}>{guest}</li>)
        }
      </ul>
    );
  };

  return (
    <div className={styles['container']}>
      <h1>Welcome to GuestList!</h1>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={onClick}>Add Guest</button>
      <br/>
      {renderGuestsList()}
    </div>
  );
}

export default GuestList;
