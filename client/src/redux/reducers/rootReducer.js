import {combineReducers} from "redux";
import profileReducer from "./profileReducer/profileReducer";
import placesReducer from "./placesReducer/placesReducer";

export default combineReducers({
    user: profileReducer,
    list: placesReducer
})