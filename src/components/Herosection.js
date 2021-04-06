import React from 'react';
import '../index.css';
import { Button } from './Button';
import './Herosection.css';

function Herosection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>EXPERIENCE THE WORLD</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'> 
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED </Button>
                 <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' /></Button>
            </div>
           

        </div>
    )
}

export default Herosection;
 