import {combineReducers} from "redux";
import profileReducer from "./profileReducer/profileReducer";
import placesReducer from "./placesReducer/placesReducer";
import userReducer from '../reducers/userReducer';
import loaderReducer from '../reducers/loaderReducer';
import placeDetailsReducer from "./placeDetailsReducer/placeDetailsReducer";

export default combineReducers({
    userData: profileReducer,
    list: placesReducer,
    user: userReducer,
    loader: loaderReducer,
    placeDetails: placeDetailsReducer
})

