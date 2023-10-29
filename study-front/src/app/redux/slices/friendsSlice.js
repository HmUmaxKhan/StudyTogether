const { createSlice } = require("@reduxjs/toolkit/dist");

const initialState = {
    sentInvitations:[],
    pendingFriends:[],
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

       SetPendingInvitations:(state,action)=>{
        console.log("pendingInvitations: ",action);
        let data={
            pendingFriends:action.payload
        }
        console.log("pendingInvitations data: ",data);
            state.pendingFriends.push(data);
       },
       
       SetOnlineUsers:(state,action)=>{

       }
    }
})

export const { SetFriends } = FriendsSlice.actions;
export const { SetPendingInvitations } = FriendsSlice.actions;
export default FriendsSlice.reducer