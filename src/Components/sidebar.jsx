import React from 'react';
import {CiSquareRemove} from 'react-icons/ci'
import {menu} from './navbar';

export function toggleSideBar() {
    if(document.getElementById('sidebar').style.marginRight=='-100%'){
        document.getElementById('sidebar').style.marginRight='0';
    }
    else{
        document.getElementById('sidebar').style.marginRight='-100%';
    }

    document.getElementById('sidebar').style.transition='.5s'
}

function Sidebar() {
    return(
        <div id='sidebar'>
           <CiSquareRemove id='close' onClick={toggleSideBar}/> 
           <div className='menu-s'>
                {
                    menu.map((element, index)=>(
                        <a href={element.link}>{element.name}</a>
                    ))
                }
            </div>
            <div className="bottom">
            Copyright {new Date().getFullYear()}
            </div>
        </div>
    )
}

export default Sidebar;