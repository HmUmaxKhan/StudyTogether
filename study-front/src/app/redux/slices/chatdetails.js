const { createSlice,nanoid } = require("@reduxjs/toolkit");

export const chatType = {
    DIRECT:'DIRECT',
    GROUP:'GROUP'
}


const ChatDetailsSlice = createSlice({
    name:"chatDetailsSlice",
    initialState : {
        choosenChatDetails : null,
        chatType: null,
        msgs : []
    },
    reducers:{
       setChatDetails : (state,action)=>{
        console.log("CHAT DETAILS : ",action.payload );
          state.choosenChatDetails = action.payload.choosenChatDetails;
          state.chatType = action.payload.chatType;
          state.msgs = [];
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
