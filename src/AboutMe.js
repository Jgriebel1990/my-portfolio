import React, { Component } from "react";
import './styles/aboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>About Me</h1>
        </header>
        {/* <h2>Quick life story</h2> */}
        <h3 className='txt-box'> <h2>Quick life story</h2>
          <p>
            Born in 1990 and raised in Gainesville. I love spending time with my beautiful girlfriend, exercising and
            doing outdoor activites like going on nature trails or
            shooting hoops
            playing video games, board games or card games with my friends.
            Graduated high school from P.K. Yonge Developmental Research
            School in 2009. Attended Santa Fe College shortly after.
            I decided to take a few years off and eventually recieved my
            AA in Computer Science in 2016. I've been working at Publix
            Supermarket since 2012,
             and just recieved my certificate in web application
            development from Gainesville Dev Academy. I am ready to use the new
            skills I've learned
            to join a team and help contribute in anyway I can.
          </p>
        </h3>
        <img src="http://via.placeholder.com/500x250" alt=""/>
      </div>
    );
  }
}

export default AboutMe;
