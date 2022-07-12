import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./AdminPage/reducer";
import { jsReducers } from "./JavascriptPage/reducers";


const rootReducers = combineReducers({
    adminLogin : adminReducer,
    jsCurrentques : jsReducers

})

export const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)