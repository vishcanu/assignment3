import React from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <div className="App" style={{display:'flex',flexDirection:'row',flex:1}}>
      <div style={{flex:1}}>
        <Signup />
      </div>

      <div style={{flex:1}}>
        <Login />
      </div>

    </div>
  );
}

export default App;


