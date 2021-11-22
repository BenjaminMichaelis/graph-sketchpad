import React from 'react';
import logo from './logo.svg';
import Sidebar from "./Sidebar";
import './App.css';
import GraphingSurface from './GraphingSurface';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <GraphingSurface />
    </div>
  );
}

export default App;
