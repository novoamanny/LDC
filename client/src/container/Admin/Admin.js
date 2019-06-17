import React, {Component} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './Admin.css';

import Login from '../Login/Login';
import User from '../User/User';




class Admin extends Component{
    constructor(){
        super();


        this.state={
            route: 'login',
            isSignedIn: false
        }
    }


    onRouteChange = () =>{
        // if( route === 'user'){
        //     this.setState({
        //         isSignedIn: true
        //     });
        // }else{
        //     this.setState({
        //         isSignedIn: false
        //     })
        // }
        

        // this.setState({
        //     route: route
        // });

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    }



    render(){
        return(
            

                <div id='Admin-container'>


                    <Login onRouteChange={this.onRouteChange}/>
                    
                </div>
            
        );
    };
}


export default Admin;