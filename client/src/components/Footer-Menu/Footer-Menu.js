import React from 'react';

import './Footer-Menu.css';


const FooterMenu = ({onRouteChange}) =>{
    return(
        <div id='footer-menu-container'>
            <li onClick={() => onRouteChange('Chupa')}>Chupacabras</li>
            <li onClick={() => onRouteChange('CBS')}>Chupa Beer Stop</li>
            <li onClick={() => onRouteChange('CNC')}>Chupa Nerd Corner</li>
            <li onClick={() => onRouteChange('contact')}>Contact Us</li>
        </div>
    );
}



export default FooterMenu;