import React from 'react';

import { Component, PureComponent, Functional } from './components';

import './App.css'

function App() {
  return (
    <div className='main-app'>
      <Component />
      <PureComponent />
      <Functional />
      {React.createElement('span', null, 'Hello World, I\'m React Create Element')}
    </div>
  );
}

export default App;
