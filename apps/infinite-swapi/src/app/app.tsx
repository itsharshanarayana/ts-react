// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {Typography} from "@mui/material";
import InfinitePeople from "./components/people/infinite-people/infinite-people";

export function App() {
  return (
    <>
      <div className={styles['container']}>
        <Typography variant="h4">Infinite SWAPI</Typography>
        <InfinitePeople />
      </div>
    </>
  );
}

export default App;
