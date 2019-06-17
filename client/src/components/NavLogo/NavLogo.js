import React from 'react';
import './NavLogo.css';

import logo from '../../images/Logo.png';

const NavLogo = ({onRouteChange}) =>{
    return(
        <div id='NavLogo-container'>

            <div id='image'>
                <a href='/'><img src={logo}/></a>
            </div>
            

            <div id='icons-middle'>
                <a href='https://www.instagram.com/losdoschupacabras69/' target='_blank'><i className="fab fa-instagram"></i></a>
                <a href='https://twitter.com/ChupacabrasDos' target='_blank'><i className="fab fa-twitter"></i></a>
                <a href='https://www.facebook.com/losdoschupachoops/?modal=admin_todo_tour' target='_blank'><i className="fab fa-facebook-square"></i></a>
                <a href='https://soundcloud.com/chupa-cabras-365193127' target='_blank'><i className="fab fa-soundcloud"></i></a>
                <a href='https://podcasts.apple.com/us/podcast/los-dos-chupacabras/id1438173330' target='_blank'><i className="fas fa-podcast"></i></a>
            </div>

        </div>
    );
}


export default NavLogo;