import React ,{Component} from 'react';

import Dashboard from '../Dashboard/Dashboard';
import Register from '../Register/Register';

import logo from '../../images/Logo.png';


import './User.css';

class User extends Component{


    constructor(){
        super();

        this.state={
            route:'dashboard'
        }
    }



    onDashRouteChange = (route) =>{
        this.setState({
            route: route
        });

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render(){

        const {onRouteChange} = this.props;

        return(
            <div id='User-container'>



            <div id='User-options'>
                <p onClick={() => onRouteChange('login')}>Sign Out</p>
                <p onClick={() => this.onDashRouteChange('register')}>Register</p>
                <p onClick={() => this.onDashRouteChange('dashboard')}>Dashboard</p>
            </div>

            <div id='User-logo'>
                <img src={logo}/>
            </div>
            

            { this.state.route === 'dashboard'
                ?   <div>
                        <Dashboard/>
                    </div>
                :   <div>
                        <Register/>
                    </div>
            }

            </div>
        );
    }
}


export default User;