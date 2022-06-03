import axios from "axios";
import {getAllPlaces} from "../placesThunk/placesThunk";

export const setRatings = (data) => async (dispatch) => {
    const response = await axios.post(`http://localhost:8080/rates`, data)
    dispatch(getAllPlaces('all'))
}