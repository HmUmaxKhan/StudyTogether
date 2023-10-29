
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import { SetPendingInvitations } from "../redux/slices/friendsSlice";


export default function connectWithSocketio(userDetails){
    
    let JWTtoken = userDetails.token;

    
    let socket = null;
    
        socket = io("http://localhost:5002",{
        auth:{
            token:JWTtoken
        }
    });
    
    socket.on("connect",()=>{
        console.log('connected');
        console.log(socket.id);
    })
    
    socket.on("friends-invitations",(data)=>{
        const {friendInvitationsDetails} = data
        console.log("FriendsInvitations :",friendInvitationsDetails);
        const dispatch = useDispatch();
        dispatch(SetPendingInvitations(friendInvitationsDetails));
    })
    
}
