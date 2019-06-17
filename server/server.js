const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());





const port = process.env.PORT | 3000;




const admin = require('./routes/api/admin');








// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() =>{
        console.log('MongoDB Connected');
    })
    .catch((err)=>{
        console.log(err);
    });


// Body Parser
app.use(bodyParser.json());


app.get('/', (req, res) =>{
    res.json(db.users);
})


// app.get('/admin', (req, res) =>{
//     res.json({message: "ADMIN"})
// });


// Use Routes
app.use('/api/admin', admin);


app.listen(port, () => {
    
     console.log(`Server running on port ${port}`);
})