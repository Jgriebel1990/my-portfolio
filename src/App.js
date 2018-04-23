import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './Navbar';
import AboutMe from './AboutMe';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/contact' component={Contact} />
        <Route path='/projects' component={Projects} />
      </div>
    );
  }
}

export default withRouter(App);
