const { createSlice } = require("@reduxjs/toolkit/dist");

const initialState = {
    sentInvitations:[],
    onlneUsers:[]
}
const FriendsSlice = createSlice({
    name:"Friends Slice",
    initialState,
    reducer:{

       SetFriends:(state,action)=>{
        console.log("FriendsInvitations: ",action);
            let data = {
                sentInvitations:action.payload
            }
            console.log("FriendsInvitations data: ",data);
            state.sentInvitations.push(data);
       },
       
       SetOnlineUsers:(state,action)=>{

       }
    }
})

export const { SetFriends } = FriendsSlice.actions;
export default FriendsSlice.reducer