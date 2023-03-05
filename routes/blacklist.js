const express = require('express'); 
const blacklistRoutes = express.Router(); 


const dbo = require('../config/conn.js'); 

blacklistRoutes.route('/all').get(async function(_req, res){
    const dbConnect = dbo.getDb(); 
    dbConnect 
    .collection('blacklist') 
    .find({}) 
    .toArray(function(err, result){
        if(err){
            res.status(404).json('Error');
        } else{
            res.status(201).json(result);
        }
    })
}); 

blacklistRoutes.route('/add').post(function(req, res) {
    const dbConnect = dbo.getDb(); 
    const newDoc = {
        num: req.body.num, 
        name: req.body.name
    };

    dbConnect 
    .collection('blacklist') 
    .insertOne(newDoc, function(err, result){
        if(err) {
            res.status(404).send('Error Inserting'); 
        } else {
            console.log(`Adding Blacklister with ${result._id}`);
            res.status(201).send();
        }
    });
});



module.exports = blacklistRoutes; 
