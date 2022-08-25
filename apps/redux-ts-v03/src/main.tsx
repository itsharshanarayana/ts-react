import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import rootReducers from "./state/reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(rootReducers);

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
