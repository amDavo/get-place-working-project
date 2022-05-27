import axios from "axios";
import {setAllPlaces} from "../../actions/allPlacesAction/placesAction";

export const getAllPlaces = (params) => async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/places/${params}`)
    console.log(response, 'aa')
    dispatch(setAllPlaces(response.data))


}