import React, {Component} from 'react';


import './Register.css';


    


class Register extends Component{


    constructor(){
        super();

        this.state ={
            
            registerEmail: '',
            registerName: '',
            registerPassword: ''
        }
    }


    onNameChange = (event) =>{
        this.setState({
            registerName: event.target.value
        })
   }

    onEmailChange = (event) =>{
        this.setState({
            registerEmail: event.target.value
        })
   }

   onPasswordChange = (event) =>{
        this.setState({
            registerPassword: event.target.value
        })
   }


    onRegisterClick = (event) =>{
        

        const {registerName, registerEmail, registerPassword} = this.state;
       

         fetch('http://localhost:3000/api/admin/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: registerName,
              email: registerEmail,
              password: registerPassword
            })
         })
         .then(response =>{
             console.log(response);
         })
    }

    render(){
        return(
            <div id='Register-container'>
                <div id='form-register-container'>
                    
                    <h1>Register</h1>
                    

                    <div id='name-register-container'>
                        <label>Name</label>
                        <input onChange={this.onNameChange} type='text'/>
                    </div>


                    <div id='email-register-container'>
                        <label>Email</label>
                        <input onChange={this.onEmailChange} type='text'/>
                    </div>

                    <div id='password-register-container'>
                        <label>Password</label>
                        <input onChange={this.onPasswordChange} type='text'/>
                    </div>


                    

                    <div id='submit--container'>
                        <button onClick={() => this.onRegisterClick()} id='submit-register-btn'  type='submit'>Submit</button>
                    </div>

                </div>
            </div>
        );
    };
}


export default Register;