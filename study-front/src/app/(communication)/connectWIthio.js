
import io from "socket.io-client";
import { setInvitations } from "../redux/slices/pendingFriends";

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
      console.log(data);
      const { friendInvitationsDetails } = data;
      console.log("FriendsInvitations:", friendInvitationsDetails);
      dispatch(setInvitations(friendInvitationsDetails));
    });
 // Clean up the socket connection on unmounting
    // Add props.token as a dependency // or return a placeholder element if necessary
}
