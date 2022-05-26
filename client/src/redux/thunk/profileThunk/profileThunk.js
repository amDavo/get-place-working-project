import axios from "axios";
import {profileInfo} from "../../actions/profileActions/profileInfoAction";

export const setUserInfo = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/profile')
    dispatch(profileInfo(response.data))
}