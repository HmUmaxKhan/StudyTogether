import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";



export default function TutSocket(props){
   
    let dispatch = useDispatch();
    const [message, setMessage] = useState("");
    useEffect(() => {
        setMessage(props.token);
        console.log(message);
        
            const socket = io("http://localhost:5002", {
                auth:{
                token: message,
                }
              
            });
        
            socket.on("connect", () => {
              console.log("connected");
              console.log(socket.id);
            });
        
            socket.on("friends-invitations", (data) => {
              console.log(data);
              const { friendInvitationsDetails } = data;
              console.log("FriendsInvitations :", friendInvitationsDetails);
              dispatch(setInvitations(friendInvitationsDetails));
            });
      


    return () => {
      socket.disconnect(); // Clean up the socket connection on unmounting
    };
  }, [])

}