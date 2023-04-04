import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const menu = [
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
            <div className="cart">
                Cart<AiOutlineShoppingCart className='icon' />
            </div>
        </div>
    )
}

export default Navbar;