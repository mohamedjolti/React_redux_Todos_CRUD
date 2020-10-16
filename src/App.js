import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import Todos from './Todos';
import { store } from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1 className="flow-text"> todos app</h1>
      <Todos/>
    </div>
    </Provider>
  );
}

export default App;
