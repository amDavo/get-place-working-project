import axios from "axios";
import {profileInfo} from "../../actions/profileActions/profileInfoAction";
import {setInfoFavoriteIsSuccess} from "../../actions/favoriteAction/favorite.action";
// import {setInfoFavoriteIsSuccess, setUserFavorites} from "../../actions/favoriteAction/favorite.action";

export const setUserInfo = (id) => async (dispatch) => {
    const response = await axios.post('http://localhost:8080/profile', {id})
    console.log(response.data, 'data')
    dispatch(profileInfo(response.data.userInfo))
}

export const setFav = (id) => async (dispatch) => {
    const response = await axios.post('http://localhost:8080/profile', {id})
    console.log(response.data, 'data')
    dispatch(setInfoFavoriteIsSuccess(response.data.userInfo))
}