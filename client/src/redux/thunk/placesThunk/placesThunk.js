import axios from "axios";
import {setAllPlaces} from "../../actions/allPlacesAction/placesAction";
import {THUNK_getCoordsFromAddress} from "../locationThunk/locationThunk";

export const getAllPlaces = (params) => async (dispatch) => {
    const response = await axios.get(`http://localhost:8080/places/${params}`)
    dispatch(setAllPlaces(response.data))
    dispatch(THUNK_getCoordsFromAddress(response.data))


}
