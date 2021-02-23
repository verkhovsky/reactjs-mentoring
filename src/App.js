import React from 'react';

import { Component, PureComponent, Functional } from './components';

import './App.css'

function App() {
  return (
    <div className='App'>
      <Component />
      <PureComponent />
      <Functional />
      {React.createElement('span', null, 'Hello World, I\'m React Create Element')}
    </div>
  );
}

export default App;
