const  express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

//Connection to  Database
mongoose.connect(process.env.DB_URL,{ useNewUrlParser : true , useUnifiedTopology : true}, () => {
    console.log("Connected to DB");
});
// TO MAKE SERVER UNDERSTAND THAT  DATA PASSED IS OF JASON TYPE
app.use(bodyParser.json())


// IMPORT ROUTES
const friendRoute = require('./routes/friends');

// GOING TO THE IMPORTED ROUTES
app.use('/friends' , friendRoute); 

app.get('/', (req,res) => {
    res.send("tHIS IS THE MAIN PAGE ");
});

// Listening on the server
app.listen( process.env.PORT, function (req, res) {

    console.log("Server started on port 3000");
    
});
    
