const { configureStore } = require("@reduxjs/toolkit");
import Authreducer from "./slices/auth"
import Friendsreducer from "./slices/friendsList"
import PendingReducer from './slices/pendingFriends';
import OnlineFrndsReducer from "./slices/onlineusers"

export const store = configureStore({
    reducer:{
    auth: Authreducer,
    pending:PendingReducer,
    friends: Friendsreducer,
    onlinefrnds : OnlineFrndsReducer
    }
})