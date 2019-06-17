import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import FooterMenu from '../../components/Footer-Menu/Footer-Menu';
import FooterIcons from '../../components/Footer-Icons/Footer-Icons';
import './Footer.css';



const style = {
    cursor: 'pointer',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textDecoration: 'none',
    color: '#fff',
    fontSize: '10px'
}

class Footer extends Component{


    
     
      

    render(){

        const {onRouteChange} = this.props;

        return(
        
            <div id='footer'>
                <FooterMenu onRouteChange={onRouteChange}/>
                <div id='version'>
                    <p>Los Dos Chupacabras LLC &copy; 2019</p>
                    <p>Ver.0.2.2</p>
                    <Link onClick={() => onRouteChange()} style={style} to='/Admin/login'>Admin</Link>
                </div>
                <FooterIcons/>
            </div>
        
    );
    }
    
}


export default Footer;