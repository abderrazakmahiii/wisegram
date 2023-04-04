import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {RiMenu3Fill} from 'react-icons/ri'
import { toggleSideBar } from './sidebar';

export const menu = [
    {name:'Categories', link:'#'},
    {name:'Trending', link:'#'},
    {name:'Contact', link:'#'}
]

function Navbar() {
    return(
        <div id='navbar'>
            <a href='#' id='logo'>Wisegram</a>
            <div className='menu'>
                {
                    menu.map((element, index)=>(
                        <a href={element.link}>{element.name}</a>
                    ))
                }
            </div>
            <div className="right">
            <div className="cart">
                Cart<AiOutlineShoppingCart className='icon' />
                <span>1</span>
            </div>
            <RiMenu3Fill id='dropdownmenu' onClick={toggleSideBar}/>
            </div>
        </div>
    )
}

export default Navbar;