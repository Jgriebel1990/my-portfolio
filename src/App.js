import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <header>
          <h1>Portfolio</h1>
        </header>
        <Contact />
        <Projects />
      </div>
    );
  }
}

export default App;
