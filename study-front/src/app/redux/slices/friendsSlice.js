const { createSlice } = require("@reduxjs/toolkit/dist");

const initialState = {
  setfriends: [],
};
const FriendsSlice = createSlice({
  name: "FriendsSlice",
  initialState,
  reducer: {
    setFriends: (state, action) => {
      console.log("SetFriends Reducer: ", action.payload);
      state.setfriends.push(action.payload);
    },
  },
});

export const { setFriends } = FriendsSlice.actions;
export default FriendsSlice.reducer;
