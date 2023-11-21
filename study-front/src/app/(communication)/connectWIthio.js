
import io from "socket.io-client";
import { setInvitations } from "../redux/slices/pendingFriends";
import { setFriendsList } from "../redux/slices/friendsList";
import { addOnlineUser } from "../redux/slices/onlineusers";


export default function connectWithSocketio(userDetails,dispatch) {

  let JWTtoken = userDetails.token
    const socket = io("http://localhost:5002", {
      auth: {
        token: JWTtoken,
      },
    });

    socket.on("connect", () => {
      console.log("connected");
      console.log("Socket ID:", socket.id);
    });

    socket.on("friends-invitations", (data) => {
      const { friendInvitationsDetails } = data;
      dispatch(setInvitations(friendInvitationsDetails));
    });

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
