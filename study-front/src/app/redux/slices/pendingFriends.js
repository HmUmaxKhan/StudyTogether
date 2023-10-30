const { createSlice,nanoid } = require("@reduxjs/toolkit");


const initialState = {
    pendingInvitations:[]
}

const PendingSlice = createSlice({
    name:"InvitationSlice",
    initialState,
    reducers:{
       setInvitations : (state,action)=>{
         console.log(action);
          state.pendingInvitations.push(action.payload);
       }
    }

})


// Exporting actions
export const { setInvitations } = PendingSlice.actions;

// Exporting the reducer
export default PendingSlice.reducer;
