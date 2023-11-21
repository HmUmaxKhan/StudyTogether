const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    onlineusers:[]
}

const Onlinefrnds = createSlice({
    name: "onlinefriends",
    initialState,
    reducers:{
        addOnlineUser:(state,action)=>{
            
            state.onlineusers.push(action.payload);
        }
    }
})

export const {addOnlineUser} = Onlinefrnds.actions;
export default Onlinefrnds.reducer;