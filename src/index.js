import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import { store, persistor } from './redux/store';
import App from './components/App/App.jsx';
// import { postContact } from './apiService/apiService';
import { addContact } from './redux/contacts/contacts-operations';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
const resp = addContact()(store.dispatch);
console.log('resp :>> ', resp);
