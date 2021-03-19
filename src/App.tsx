import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header/>
        <Main />
      </div>
    </div>
  );
}

export default App;
