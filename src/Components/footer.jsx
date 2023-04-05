import React from 'react';
import {BsTwitter} from 'react-icons/bs'
import {FiInstagram } from 'react-icons/fi'
import {FaRedditAlien, FaYoutube} from 'react-icons/fa'

function Footer() {
    return(
        <div id='footer'>
            <div className="email">
            <h3>Subscribe to our Newsletter</h3>
                <input type='text' placeholder='Type your email'/>
                <button>Subscribe</button>
            </div>
            <div className="top">
                <div className="one">
                    <a href='#' className='logo'>Wisegram</a>
                    <div className="sm">
                    <i><BsTwitter /></i>
                    <i><FiInstagram /></i>
                    <i><FaRedditAlien /></i>
                    <i><FaYoutube /></i>
                    </div>
                </div>
                <div className="two">
                    <a href='#'>Categories</a>
                    <a href='#'>Trending</a>
                    <a href='#'>Most liked</a>
                    <a href='#'>Help centre</a>
                </div>
                <div className="two">
                    <a href='#'>About</a>
                    <a href='#'>Contact</a>
                    <a href='#'>News</a>
                    <a href='#'>Privacy policy</a>
                    <a href='#'>Careers</a>
                </div>
                <div className="two">
                    <a href='#'>Blog</a>
                    <a href='#'>Newsletter</a>
                    <a href='#'>Events</a>
                    <a href='#'>Tutorials</a>
                    <a href='#'>Support</a>
                </div>
            </div>
            <div className="bottomf">
                <p>Choose more, spend less.</p>
                <p>Copyrights{new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;