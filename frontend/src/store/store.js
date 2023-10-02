import {composeWithDevTools} from "redux-devtools-extension";
import {legacy_createStore as createStore , combineReducers , applyMiddleware} from "redux"
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";

const rootReducers = combineReducers({
    auth: authReducer,
});

const stroe = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default stroe;