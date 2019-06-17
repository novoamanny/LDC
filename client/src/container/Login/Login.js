import React, {Component} from 'react';


import './Login.css';


import logo from '../../images/Logo.png';


class Login extends Component{

   constructor(props){
       super(props);

       this.state={
           loginEmail: '',
           loginPassword: '',
           
           

       }
       
   }


   componentWillMount(){
       
   }

   onEmailChange = (event) =>{
        this.setState({
            loginEmail: event.target.value
        })
   }

   onPasswordChange = (event) =>{
        this.setState({
            loginPassword: event.target.value
        })
   }



   loginHandler = (onRouteChange) =>{
    
    

    console.log('fetching POST....');

    fetch('http://localhost:3000/api/admin/login', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.loginEmail,
          password: this.state.loginPassword
        })
      })
      .then(response => {
            
            if(response.ok){
                onRouteChange('user');
            } else{
                console.log(response);
            }
            
      });
      
      


    //    
   }


    render(){

        const {onRouteChange} = this.props;
        

        return(
            <div id='Login-container'>

            <div id='login-logo'>
                <img src={logo}/>
            </div>
                
                <div id='form-login-container'>
                    
                    <h1>Admin</h1>
                    

                    <div id='email-login-container'>
                        <label>Email</label>
                        <input onChange={this.onEmailChange} type='text'/>
                    </div>

                    <div id='password-login-container'>
                        <label>Password</label>
                        <input onChange={this.onPasswordChange} type='text'/>
                    </div>


                    

                    <div id='submit-login-container'>
                        <button id='submit-login-btn' onClick={() => this.loginHandler(onRouteChange)} type='submit'>Submit</button>
                    </div>

                </div>


            </div>
        );
    };
}


export default Login;