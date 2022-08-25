import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import rootReducer from "./reducers/rootReducer";

import App from './app/app';

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
