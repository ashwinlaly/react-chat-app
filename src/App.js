import React from 'react';
import openSocket from 'socket.io-client';
import './App.css';

import Signin from './Pages/Signin';

const socket = openSocket('http://localhost:1234');

function App() {

  // socket.on('testSend', data => console.log(data));
  socket.emit('testGet', { message : "As"});

  return (
    <div className="App">
      <Signin />
    </div>
  );

}

export default App;
