
import io from "socket.io-client";
import { setInvitations } from "../redux/slices/pendingFriends";
import { setFriendsList } from "../redux/slices/friendsList";
import { addOnlineUser } from "../redux/slices/onlineusers";


export default function connectWithSocketio(userDetails,dispatch) {

  //Connecting with io socket and send token for aurthorization
  let JWTtoken = userDetails.token
    const socket = io("http://localhost:5002", {
      auth: {
        token: JWTtoken,
      },
    });

    // Getting notified on connection
    socket.on("connect", () => {
      console.log("connected");
    });

    //Getting the list of friends invitations
    socket.on("friends-invitations", (data) => {
      const { friendInvitationsDetails } = data;
      dispatch(setInvitations(friendInvitationsDetails));
    });

    //Getting the list of friends
    socket.on("friends-lists", (data) => {
      const { friends } = data;
      console.log("connection with io : ",friends);

      dispatch(setFriendsList(friends));
    });

    //Getting online users 
    socket.on('online-users',function(data){

      const {OnlineUsers} = data;
       
      console.log("Online users:" , OnlineUsers);

      dispatch(addOnlineUser(OnlineUsers));
    })
}

export const sendDirectMessage = (data) => {
  console.log(data);
  socket.emit("direct-message", data);
};

// export const getDirectChatHistory = (data) => {
//   socket.emit("direct-chat-history", data);
// };
