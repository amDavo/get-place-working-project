import {combineReducers} from "redux";
import profileReducer from "./profileReducer/profileReducer";
import placesReducer from "./placesReducer/placesReducer";
import userReducer from '../reducers/userReducer';
import loaderReducer from '../reducers/loaderReducer';

export default combineReducers({
    userData: profileReducer,
    list: placesReducer,
    user: userReducer,
    loader: loaderReducer,
})

