// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import {BrowserRouter, Route} from "react-router-dom";

import StreamList from "../components/steams/stream-list/stream-list";
import StreamShow from "../components/steams/stream-show/stream-show";
import StreamCreate from "../components/steams/stream-create/stream-create";
import StreamEdit from "../components/steams/stream-edit/stream-edit";
import StreamDelete from "../components/steams/stream-delete/stream-delete";

import Header from '../components/shared/header/header';

export function App() {
  return (
    <div className={`${styles['container']} ui container`}>

      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
