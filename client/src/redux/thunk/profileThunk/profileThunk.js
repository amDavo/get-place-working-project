import axios from "axios";
import {profileInfo} from "../../actions/profileActions/profileInfoAction";
import {setUserFavorites} from "../../actions/favoriteAction/favorite.action";

export const setUserInfo = (id) => async (dispatch) => {
    const response = await axios.post('http://localhost:8080/profile',{id})
    console.log(response.data,'data')
    dispatch(profileInfo(response.data.userInfo))
    dispatch(setUserFavorites(response.data.favorites))
}