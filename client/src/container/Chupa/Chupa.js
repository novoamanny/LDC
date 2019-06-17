import React, {Component} from 'react';

import './Chupa.css';


import Ivan from '../../components/Chupa-Ivan/Chupa-Ivan';
import Joe from '../../components/Chupa-Joe/Chupa-Joe';


class Chupa extends Component{
    constructor(){
        super();

        this.state ={
            route: 'Ivan'
        }
    }


    onRouteChange = (route) =>{
        this.setState({
            route: route
        });
    }
    


    render(){

        const onRouteChange = this.onRouteChange;

        return(
            <div id='Chupa-container'>

            {/* <div id='button-container'>
                <li id='Ivan-btn' onClick={() => onRouteChange('Ivan')}>Ivan</li>
                <li id='Joe-btn' onClick={() => onRouteChange('Joe')}>Joe</li>
            </div> */}

{/* 
            { this.state.route === 'Ivan'
                ?   <div>
                        <Ivan/>
                    </div>

                :   <div>
                      <Joe/>
                    </div>
            } */}

            <br/>
            <Ivan/>
            
            <Joe/>
                
            </div>
        );
    }
}


export default Chupa;