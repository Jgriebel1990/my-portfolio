import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <nav>
                <ul className='nav'>
                    <p className='navfont'>Portfolio</p>
                    <li className='navitem'>
                        <Link to='/aboutme'>About Me</Link>
                    </li>
                    <li className='navitem'>
                        <Link to='/contact'>Contact Information</Link>
                    </li>
                    <li className='navitem'>
                        <Link to='/projects'>Projects</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;