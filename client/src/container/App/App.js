import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';


import './App.css';
import store from './store';



import Home from '../Home/Home';
import Chupa from '../Chupa/Chupa';
import CBS from '../CBS/CBS';
import CNC from '../CNC/CNC';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';


import Admin from '../Admin/Admin';
import User from '../User/User';





class App extends Component {

  constructor(){
    super();

  }




  onRouteChange = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }



  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar onRouteChange={this.onRouteChange}/>

          {/* { this.state.route === 'home'
            ? <div>
              <Home/>
              </div>
            : ( this.state.route === 'Chupa'
              ? <div>
                  <Chupa/>
                </div>
              : ( this.state.route === 'CBS'
                ? <div>
                    <CBS/>
                  </div>
                : ( this.state.route === 'CNC'
                  ? <div>
                      <CNC/>
                    </div>
                  : ( this.state.route === 'contact'
                    ? <div>
                        <Contact/>
                      </div>
                    : <div>
                        <Admin/>
                      </div>
                  )
                )
              )

            )
          } */}

          <Route exact path='/' component={Home}/>
           
          
          <Route path='/chupacabras' component={Chupa}/>

          <Route path='/ChupaBeerStop' component={CBS}/>

          <Route path='/ChupaNerdCorner' component={CNC}/>

          <Route path='/Contact' component={Contact}/>

          <Route path='/Admin/Login' component={Admin}/>

          <Route path='/Admin/User' component={User}/>
           

    
        

          

          <footer>
            <Footer onRouteChange={this.onRouteChange}/>
          </footer>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
