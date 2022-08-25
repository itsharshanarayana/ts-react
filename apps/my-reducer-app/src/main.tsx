import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import {createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
);
