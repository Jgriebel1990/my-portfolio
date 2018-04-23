import React, { Component } from 'react';

class Projects extends Component{
    render(){
        return(
            <div>
                <h2>Projects</h2>
                    <ul>
                        <li>
                            <a href="https://jgweather-app.herokuapp.com/">React weather app</a>
                        </li>
                        <li>
                            <a href="https://mtg-deckbuilder.herokuapp.com/">Magic the Gathering Deck Builder</a>
                        </li>
                    </ul>
            </div>
        )
    }
}

export default Projects;