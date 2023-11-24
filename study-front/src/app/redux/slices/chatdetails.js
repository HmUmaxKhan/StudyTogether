const { createSlice,nanoid } = require("@reduxjs/toolkit");

export const chatType = {
    DIRECT:'DIRECT',
    GROUP:'GROUP'
}

const initialState = {
    choosenChatDetails : null,
    chatType: null,
    msgs : []
}


const ChatDetailsSlice = createSlice({
    name:"chatDetailsSlice",
    initialState,
    reducers:{
       setChatDetails : (state,action)=>{
        console.log("CHAT DETAILS : ",action.payload );
          state.choosenChatDetails = action.payload.choosenChatDetails;
          state.chatType = action.payload.chatType;
          state.msgs = [];
          console.log("CHAT DETAILS : ",state.choosenChatDetails );
       },
       setMessages : (state,action) => {
        state.msgs = action.payload.msgs;
       }
       }
    }
)



// Exporting actions
export const { setChatDetails,setMessages } = ChatDetailsSlice.actions;

// Exporting the reducer
export default ChatDetailsSlice.reducer;
