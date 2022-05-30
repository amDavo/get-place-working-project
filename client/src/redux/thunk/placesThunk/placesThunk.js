import axios from "axios";
import {setAllPlaces} from "../../actions/allPlacesAction/placesAction";

export const getAllPlaces = (params) => async (dispatch) => {
    const response = await axios.get(`http://localhost:8080/places/${params}`)
    dispatch(setAllPlaces(response.data))


}