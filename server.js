require('dotenv').config({ path: './config.env'});

const express = require('express'); 
const cors = require('cors'); 

const dbo = require('./config/conn'); 

const PORT = process.env.PORT || 5000; 

const app = express(); 

app.use(cors()); 
app.use(express.json()); 
app.use(require('./routes/blacklist')); 

app.use(function ( err, _req, res){
    console.log(err.stack); 

    res.statu(500).send("Something broke");
});

dbo.connectToServer(function(err){
    if(err){
        console.error(err); 
        process.exit(1); 
    }

    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`)
    })

})