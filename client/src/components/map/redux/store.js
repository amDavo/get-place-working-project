import {applyMiddleware, createStore} from "redux";
import {initState} from './initState'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import markerReducer from "./markerReducer";

export default createStore(markerReducer, initState(), composeWithDevTools(applyMiddleware(thunk)))
