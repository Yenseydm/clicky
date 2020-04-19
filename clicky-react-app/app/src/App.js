import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Card from "./components/card";
import Score from "./components/Score";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Jumbotron />
        <br></br>
        <Score />
    </div>
  );
}

export default App;
