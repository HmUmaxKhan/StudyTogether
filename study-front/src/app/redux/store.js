const { configureStore } = require("@reduxjs/toolkit");
import Authreducer from "./slices/auth"
import Friendsreducer from "./slices/friendsList"
import PendingReducer from './slices/pendingFriends';

export const store = configureStore({
    reducer:{
    auth: Authreducer,
    pending:PendingReducer,
    friends: Friendsreducer
    }
})