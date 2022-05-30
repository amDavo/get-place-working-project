import axios from "axios";
import {placeDetails} from "../../actions/placeDetailsAction/placeDetailsAction";


export const getPlaceDetails = (id) => async (dispatch) => {
    const response = await axios.get(`http://localhost:8080/location/${id}`)
    dispatch(placeDetails(response.data))
}