const mongoose = require('mongoose');
const {Schema} = require('mongoose');

/* The code is defining a Mongoose schema for a user object. The schema specifies the structure and
data types of the user object. It includes fields such as username, mail, password, name, phone, and
address. Each field has a specified data type and may have additional requirements, such as being
required and unique. */
const UserSchema = new mongoose.Schema({
    username:{type:String, require: true, unique:true},
    mail:{type:String, require: true, unique:true},
    password:{type:String, require:true}, 
    name:{type:String, require:true}, 
    phone:{type:String, require:true}, 
    address:{type:String, require:true}, 
    friends : [{type:Schema.Types.ObjectId, ref:'invitation'}], 
});

/* `const user = mongoose.model('user',UserSchema);` is creating a Mongoose model based on the
UserSchema. */
const user = mongoose.model('user',UserSchema);

module.exports = user;