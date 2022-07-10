import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./AdminPage/reducer";

const rootReducers = combineReducers({
    adminLogin : adminReducer
})

export const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)