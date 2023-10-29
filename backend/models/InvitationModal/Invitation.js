const mongoose = require('mongoose');
const {Schema} = require('mongoose');

/* The code is defining a Mongoose schema for a user object. The schema specifies the structure and
data types of the user object. It includes fields such as username, mail, password, name, phone, and
address. Each field has a specified data type and may have additional requirements, such as being
required and unique. */
const InvitationSchema = new mongoose.Schema({

    senderID:{type: Schema.Types.ObjectId, ref:'user'}, //Sender id

    receiverID:{type: Schema.Types.ObjectId, ref:'user'}, // Receiver id
});

const invitation = mongoose.model('invitation',InvitationSchema);

module.exports = invitation;