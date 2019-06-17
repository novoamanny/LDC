import React, { Component } from 'react';

import NavLogo from '../../components/NavLogo/NavLogo';
import NavMenu from '../../components/NavMenu/NavMenu';
import NavBTN from '../../components/Nav-BTN/Nav-BTN';


import './Navbar.css';


class Navbar extends Component{


    constructor(props) {
        super(props);

        this.state = {};

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});

        
    }
  
    componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop});
        window.addEventListener('scroll', this.handleScroll);
    }
  
    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;

        
            
    }



    openSideMenu = () =>{
        document.getElementById('side-menu').style.width = '325px';
        
    }

    closeMenu = () =>{
        document.getElementById('side-menu').style.width = '0';
        
    }


    sideNavHandler = (onRouteChange, route) =>{
        onRouteChange(route);
        this.closeMenu();
    }

    // navHandler = () =>{
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         document.getElementById("main-nav").style.className += " fixed-nav-scroll";
    //       }
    // }


    

    render (){

        const {onRouteChange} = this.props;

        return(
            <div id='nav' >
                <nav id='main-nav' className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
                    <NavBTN openSideMenu={this.openSideMenu}/>
                    <NavMenu onRouteChange={onRouteChange}/>
                </nav>


                <div id="side-menu" className="side-nav">
                    <button className="btn-close" onClick={this.closeMenu}>&times;</button>
                    
                    <li onClick={() => this.sideNavHandler(onRouteChange, 'Chupa')}>Chupacabras</li>
                    <li onClick={() => this.sideNavHandler(onRouteChange, 'CBS')}>Chupa Beer Stop</li>
                    <li onClick={() => this.sideNavHandler(onRouteChange, 'CNC')}>Chupa Nerd Corner</li>
                    <li onClick={() => this.sideNavHandler(onRouteChange, 'contact')}>Contact Us</li>
                    

                    <div id='side-icons'>
                        <a href='https://www.instagram.com/losdoschupacabras69/' target='_blank'><i className="fab fa-instagram"></i></a>
                        <a href='https://twitter.com/ChupacabrasDos' target='_blank'><i className="fab fa-twitter"></i></a>
                        <a href='https://www.facebook.com/losdoschupachoops/?modal=admin_todo_tour' target='_blank'><i className="fab fa-facebook-square"></i></a>
                        <a href='https://soundcloud.com/chupa-cabras-365193127' target='_blank'><i className="fab fa-soundcloud"></i></a>
                        <a href='https://podcasts.apple.com/us/podcast/los-dos-chupacabras/id1438173330' target='_blank'><i className="fas fa-podcast"></i></a>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Navbar;