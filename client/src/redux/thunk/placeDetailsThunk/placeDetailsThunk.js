import axios from "axios";
import {placeDetails} from "../../actions/placeDetailsAction/placeDetailsAction";


export const getPlaceDetails = (id) => async (dispatch) => {
    const response = await axios.post(`http://localhost:8080/location/${id}`)
    console.log(response.data, '=======')
    dispatch(placeDetails(response.data))
}