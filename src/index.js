import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreContext from './storeContext';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.state);
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
