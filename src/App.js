import React from 'react';
import './App.css';
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
import RootRouter from './routers/root-router';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
