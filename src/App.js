import React from 'react'
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/Navbar';
import Router from './components/Router/router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer/>
    </div>
  );
}

export default App;
