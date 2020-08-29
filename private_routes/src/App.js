import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Pages/Routes'
import Navbar from './Components/Navbar'

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Hello React</h1> */}
      <Navbar/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
