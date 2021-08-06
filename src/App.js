import logo from './logo.svg';
import './App.css';
import React from 'react';
import AuthForm from './AuthForm'


function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <AuthForm/>
    </div>
  );
}

export default App;
