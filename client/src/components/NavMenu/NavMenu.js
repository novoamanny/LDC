import React from 'react';
import {Link} from 'react-router-dom'
import './NavMenu.css';


import NavLogo from '../NavLogo/NavLogo';

const style = {
    textDecoration: 'none',
    margin: '0 40px'
}


const NavMenu = ({onRouteChange}) =>{
    return(
        <div id='NavMenu-container'>


        <div id='menu-left'>
            <ul>
                    <Link id='nav-link' to='/chupacabras'>Chupacabras</Link>

                    <div id='full'>
                        <Link id='nav-link' to='/ChupaBeerStop'>Chupa Beer Stop</Link>
                    </div>

                    <div id='short'>
                        <Link id='nav-link' to='/ChupaBeerStop'>CBS</Link>
                    </div>
                    


                <div id='icons-left'>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-facebook-square"></i></li>
                </div>

            </ul>
        </div>

        <NavLogo onRouteChange={onRouteChange}/>
       
        <div id='menu-right'>
            <ul>

                <div id='icons-right'>
                    <li><i className="fab fa-soundcloud"></i></li>
                    <li><i className="fas fa-podcast"></i></li>
                </div>

                <div id='full'>
                    <Link id='nav-link' to='/ChupaNerdCorner'>Chupa Nerd Corner</Link>
                </div>

                <div id='short'>
                    <Link id='nav-link' to='/ChupaNerdCorner'>CNC</Link>
                </div>
                
                <Link id='nav-link' to='/Contact'>Contact Us</Link>

                
            </ul>

        </div>
            
        </div>
    );
}


export default NavMenu;