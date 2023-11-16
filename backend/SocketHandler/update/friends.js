const User = require("../../models/auth/user");
const Invitation = require("../../models/InvitationModal/Invitation");
const storeSocket = require("../../storeSocket/storeSocket");

// Creating a function to notify about the friend request

const friendPendingInvitation = async (userId) => {
  try {
    const friendInvitationsDetails = await Invitation.find({
      receiverID: userId,
    }).populate("senderID", "_id username mail");

    // Getting online users array for specific user

    let receiverList = storeSocket.onlineUsersArray(userId);

    if (receiverList && Array.isArray(receiverList)) {
      // Check if receiverList is defined and an array
      const io = storeSocket.getSocketServerInstance();

      receiverList.forEach((receiverSocketId) => {
        io.to(receiverSocketId).emit("friends-invitations", {
          friendInvitationsDetails: friendInvitationsDetails,
        });
      });
    } else {
      console.error("Receiver list is not defined or not an array.");
      // Handle the error or edge case appropriately
    }
  } catch (error) {
    console.log(error);
  }
};

//Create notification about friends lists

const updatefriendslist = async (userId) => {
  try {

    // Get the list of active users
    const receiverList = storeSocket.onlineUsersArray(userId);

    //Checking the the receiver list is not empty
    if (receiverList.length > 0) {

      //Get the info about the friends of active users
      let user = await User.findById(userId,{_id:1, friends:1}).populate("friends","_id username mail");

      // Creating the friend list
      let friendsList = [];

      // Checking if the user exists
      if (user) {

        //Mapping the friends array into friend List array
        friendsList = user.friends.map((f) => {
          return {
            id: f._id,
            username: f.username,
            email: f.mail,
          };
        });
      }

      //Getting socket io instance
      const io = storeSocket.getSocketServerInstance();

      //Emitting the the friend list of respective users to active users
      receiverList.forEach((socketId) => {
        io.to(socketId).emit("friends-lists", {
          friends: friendsList ? friendsList : [],
        });
      });
    }
    // checking the error
  } catch (error) {
    console.log("ERROR IN friendslist update  ", error);
  }
};

module.exports = {
  friendPendingInvitation,
  updatefriendslist,
};
