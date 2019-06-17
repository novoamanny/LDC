import React from 'react';
import './Nav-BTN.css';
const NavBTN = ({openSideMenu}) =>{
    return(
        <div id='nav-btn-container'>
            <span id='side-nav-btn' onClick={() => openSideMenu()}>&#9776;</span>
        </div>
    );
}



export default NavBTN;