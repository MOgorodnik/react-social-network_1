import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Header />
      <Header />
      <Navbar />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
