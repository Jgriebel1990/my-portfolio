import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {
    render(){
        return(
            <div className='txt'>
                <header>
                    <h1 className='contact-txt'>Contact Information</h1>
                </header>
                <ul className='li-txt'>
                    <li className='cont-li'>Jefferson Griebel</li>
                    <li className='cont-li'><a href="mailto:jefferson.griebel@gmail.com">jefferson.griebel@gmail.com</a></li>
                    <li className='cont-li'>352-314-4762</li>
                </ul>
            </div>
        )
    }
}

export default Contact;