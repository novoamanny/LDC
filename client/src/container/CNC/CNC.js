import React, {Component} from 'react';

import image from '../../images/CNC.png';

import './CNC.css';


class CBS extends Component{
    render(){
        return(
            <div id='CNC-container'>
                <div id='CNC-logo'>
                    <img src={image}/>
                </div>

                <div id='CNC-desc'>
                    <p>
                        This is not one of “THOSE” corners, but yet a place where you can come and geek out with your fellow nerds. Here we will talk about future comic book movie releases, video game releases, even what hero would win in a battle rants. Also, as a fellow collector,I will share where you might be able to locate certain collectibles.
                    </p>
                </div>
            </div>
        );
    }
}


export default CBS;