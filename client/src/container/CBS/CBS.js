import React, {Component} from 'react';

import image from '../../images/CBS.png';

import './CBS.css';


class CBS extends Component{
    render(){
        return(
            <div id='CBS-container'>
                <div id='CBS-logo'>
                    <img src={image}/>
                </div>

                <div id='CBS-desc'>
                    <p>
                        The Chupa Beer Spot is exactly what it sounds like. Each week I’ll talk about new and unique beers and what to look for in the market. From seasonal styles to highly limited items I’ll be sure to update you with anything beer!
                    </p>
                </div>
            </div>
        );
    }
}


export default CBS;