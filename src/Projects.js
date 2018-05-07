import React, { Component } from 'react';
import './styles/projects.css';
class Projects extends Component{
    render(){
        return(
            <div className='txt'>
                <h2 className='pro-txt-h2'>Projects</h2>
                    <ul className='pro-li-txt'>
                        <li className='txt-li-style'>
                            <a href="https://jgweather-app.herokuapp.com/">React weather app</a>
                        </li>
                        <li className='txt-li-style'>
                            <a href="https://mtg-deckbuilder.herokuapp.com/">Magic the Gathering Deck Builder</a>
                        </li>
                        <li className='txt-li-style'>
                            <a href="https://jgriebel1990.github.io/number-guess/">The first app I ever made using Javascript</a>
                        </li>
                        <li className='txt-li-style'> 
                            <a href="https://jgriebel1990.github.io/litelite/"></a>
                        </li>
                        <li>
                            <a href="https://github.com/Jgriebel1990/reactNativeCounterOne">React Native counter</a>
                        </li>
                    </ul>
            </div>
        )
    }
}

export default Projects;