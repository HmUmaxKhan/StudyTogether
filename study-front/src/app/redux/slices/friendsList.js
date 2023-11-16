const { createSlice,nanoid } = require("@reduxjs/toolkit");


const initialState = {
    friendslist:[]
}

const FriendsListSlice = createSlice({
    name:"FriendsSlice",
    initialState,
    reducers:{
       setFriendsList : (state,action)=>{
         console.log("FriendsList new slice",action);
          state.friendslist.push(action.payload);
       }
    }

})


// Exporting actions
export const { setFriendsList } = FriendsListSlice.actions;

// Exporting the reducer
export default FriendsListSlice.reducer;
