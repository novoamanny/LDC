import {LOGIN_USER} from './type';


export const loginUser = () =>{
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
      
      
}