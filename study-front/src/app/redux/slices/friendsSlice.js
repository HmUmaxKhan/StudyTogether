const { createSlice } = require("@reduxjs/toolkit/dist");

const initialState = {
    setfriends:[],
    onlneUsers:[]
}
const FriendsSlice = createSlice({
    name:"Friends Slice",
    initialState,
    reducer:{

       setFriends:(state,action)=>{
        console.log("SetFriends: ",action);
            let data = {
                setFriends:action.payload
            }
            console.log("FriendsInvitations data: ",data);
            state.setfriends.push(data);
       },
       
       SetOnlineUsers:(state,action)=>{

       }
    }
})

export const { setFriends } = FriendsSlice.actions;
export default FriendsSlice.reducer