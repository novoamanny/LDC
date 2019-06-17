import React, {Component} from 'react';

import './Contact.css';

import logo from '../../images/Logo.png';


class Contact extends Component{
    render(){
        return(
            <form id='Contact-container'>


                <div id='contact-logo'>
                    <img src={logo}/>
                </div>


                <div id='email-info'>
                    <p>Get In Touch With Us</p>
                    <p>Contact Us Via Email</p>


                    <p>LosDosChupacabras@gmail.com</p>


                    <div id='info-icons-container'>
                        <a href='https://www.instagram.com/losdoschupacabras69/' target='_blank'><i className="fab fa-instagram"></i></a>
                        <a href='https://twitter.com/ChupacabrasDos' target='_blank'><i className="fab fa-twitter"></i></a>
                        <a href='https://www.facebook.com/losdoschupachoops/?modal=admin_todo_tour' target='_blank'><i className="fab fa-facebook-square"></i></a>
                        <a href='https://soundcloud.com/chupa-cabras-365193127' target='_blank'><i className="fab fa-soundcloud"></i></a>
                        <a href='https://podcasts.apple.com/us/podcast/los-dos-chupacabras/id1438173330' target='_blank'><i className="fas fa-podcast"></i></a>
                    </div>



                </div>



                <div id='form-container'>
                    
                    <h1>Enter for a raffle to WIN the first round of Chupacabra Merch!</h1>
                    

                    <div id='email-container'>
                        <label>Email</label>
                        <input type='text'/>
                    </div>

                    <div id='name-container'>
                        <label>Name</label>
                        <input type='text'/>
                    </div>


                    <div id='memo-container'>
                        <label>Memo</label>
                        <textarea rows="10" cols="30"/>
                    </div>

                    <div id='submit-container'>
                        <button id='submit-btn' disabled type='submit'>Submit</button>
                    </div>

                </div>
            </form>
        );
    }
}



export default Contact;