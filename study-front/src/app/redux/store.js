const { configureStore } = require("@reduxjs/toolkit");
import Authreducer from "./slices/auth"

export const store = configureStore({
    reducer: Authreducer,
})