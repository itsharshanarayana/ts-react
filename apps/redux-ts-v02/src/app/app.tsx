// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import {Provider} from "react-redux";
import {store} from "../state";
import RepositoriesList from "../components/repositories-list/repositories-list";

export function App() {
  return (
    <Provider store={store}>
      <>

        <h1>Welcome to React-redux with TS</h1>
        <h2>Search for a npm package</h2>
        <RepositoriesList />
        <div/>

      </>
    </Provider>
  );
}

export default App;
