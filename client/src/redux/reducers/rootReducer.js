import {combineReducers} from "redux";
import profileReducer from "./profileReducer/profileReducer";
import placesReducer from "./placesReducer/placesReducer";
import userReducer from '../reducers/userReducer';
import loaderReducer from '../reducers/loaderReducer';
import placeDetailsReducer from "./placeDetailsReducer/placeDetailsReducer";
import nickNameReducer from "./nickNameReducer";
import favoriteReducer from "./favoriteReducer/favoriteReducer";
import viewNavBarReducer from "./viewNavBarReducer/viewNavBarReducer";

export default combineReducers({
    userData: profileReducer,
    list: placesReducer,
    user: userReducer,
    loader: loaderReducer,
    isUniqueNickName: nickNameReducer,
    userFavorites: favoriteReducer,
    placeDetails: placeDetailsReducer,
    viewNavBar: viewNavBarReducer,
})

