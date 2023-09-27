const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{type:String, require: true, unique:true},
    mail:{type:String, require: true, unique:true},
    password:{type:String, require:true}, 
    name:{type:String, require:true}, 
    phone:{type:String, require:true}, 
    Address:{type:String, require:true},  
});

const user = mongoose.model('user',UserSchema);

module.exports = user;