import thunk from "redux-thunk"
import {authenticationReducer, reducer as AuthReducer} from "./auth/reducer"
import {reducer as AppReducer} from "./app/reducer"
import { legacy_createStore,applyMiddleware,combineReducers } from "redux";


const rootReducer=combineReducers({
    authentication:authenticationReducer,
})
const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}