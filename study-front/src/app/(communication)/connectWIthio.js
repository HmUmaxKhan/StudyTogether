
import io from "socket.io-client";
import { setInvitations } from "../redux/slices/pendingFriends";
import { setFriends } from "../redux/slices/friendsSlice";

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
      dispatch(setFriends(friends));
    });


 // Clean up the socket connection on unmounting
    // Add props.token as a dependency // or return a placeholder element if necessary
}
