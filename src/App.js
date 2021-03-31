import React from 'react';
import { Provider } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';

import { Main } from './pages';
import { configureStore } from './configureStore';
import './styles/styles.scss';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Main />
    </div>
  </Provider>
);

export default App;
