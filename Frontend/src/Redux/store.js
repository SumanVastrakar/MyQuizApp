import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./AdminPage/reducer";
import { jsReducers } from "./JavascriptPage/reducers";
import { cssReducers } from "./CSSPage/reducer";
import { expressReducers } from "./expressPage/reducers";
import { htmlReducers } from "./HTMLPage/reducer";
import { mongoReducers } from "./MongoPage/reducer";
import { nodeReducers } from "./NodePage/reducers";
import { reactReducers } from "./ReactPage/reducers";
import { reduxReducers } from "./ReduxPage/reducer";
import { registerReducer } from "./Register/register";
import { loginReducer } from "./Login/reducer";



const rootReducers = combineReducers({
    adminLogin : adminReducer,
    jsCurrentques : jsReducers,
    cssCurrentques : cssReducers,
    expressCurrentques : expressReducers,
    htmlCurrentques : htmlReducers,
    mongoCurrentQues : mongoReducers,
    nodeCurrentQues : nodeReducers,
    reactcurrentQues : reactReducers,
    reduxCurrentQues : reduxReducers,
    userRegister: registerReducer,
    userLogin: loginReducer,
})

export const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)