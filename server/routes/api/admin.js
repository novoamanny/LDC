const express = require('express');
const router = express.Router();



const Admin = require('../../models/Admin');
const keys = require('../../config/keys');



// G E T
router.get('/test', (req, res)=>{
    res.json({msg: "Admin Works"});
});




// P O S T  R E G I S T E R
router.post('/register', (req, res)=>{

    Admin
        .findOne({email: req.body.email})
        .then(user =>{
            // If email exist
            if(user){
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else{

                const newAdmin = new Admin({
                    name: req.body.name,
                    email: req.body.email,
                    
                    password: req.body.password
                });

                    newAdmin
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                
            }
        });
});





// P O S T   L O G I N
router.post('/login', (req, res) =>{


    const email = req.body.email;
    const password = req.body.password;
    
    // Find User by email
    Admin
        .findOne({email})
        .then(user => {

            if(!user){
                msg = 'User not found...'
                return res.status(404).json(msg);
            }

          



            if(password === user.password){
                res.json({
                    success: true,
                });
            }
            // Check Password
            else{
                msg = 'Password is incorrect';
                return res.status(400).json(msg);
            }
            
        });
});



module.exports = router;