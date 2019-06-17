import React, {Component} from 'react';

import './Dashboard.css';

class Dashboard extends Component{


    btnOnClick = (event) =>{
        // Declare all variables
        var i, tablinks;


        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("btn");
        for (i = 0; i < tablinks.length; i++) {
            
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        
        event.currentTarget.className += " active";
    }

    render(){
        return(
            <div id='Dashboard-container'>
                <div id='User-title'> 
                    <h1>Hello, Manny</h1>
                </div>
    
    
                <div>
                    <div id='btn-desc'>
                        <p>Select Page</p>
                    </div>
    
                    <div id='User-btn-container'>
                        <button id='' className='btn' onClick={this.btnOnClick}>Announcement</button>
                        <button id='' className='btn' onClick={this.btnOnClick}>Chupa Beer Stop</button>
                        <button id='' className='btn' onClick={this.btnOnClick}>Chupa Nerd Corner</button>
                    </div>
    
    
                    <div id='btn-desc'>
                        <p>Blog Post</p>
                    </div>
    
                    <div id='User-text-container'>
                        <textarea/>
                    </div>
    
                    <div id='Blog-btn'>
                        <button>Post</button>
                    </div>
                </div>
            </div>
        );
    }
    
}


export default Dashboard;