const { MongoClient } = require('mongodb'); 
require('dotenv').config({ path: '../config.env'});
const url = process.env.ATLAS_URI; 


const client = new MongoClient(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

let dbConnection; 

module.exports = {
    connectToServer: function(callback){
        client.connect(function(error, db){
            if(error || !db){
                return callback(error); 
            }

            dbConnection = db.db('blacklist'); 
            console.log('Connected Successfully')

            return callback();
        });
    }, 

    getDb: function(){
        return dbConnection; 
        
    }
}