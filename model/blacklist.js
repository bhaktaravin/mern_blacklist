const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const blacklistSchema = new mongoose.Schema({
    num:{
        type: String,
    }, 
    name:{
        type: String
    }
}); 


const Blacklist = mongoose.model('Blacklist', blacklistSchema); 

module.exports = Blacklist; 


