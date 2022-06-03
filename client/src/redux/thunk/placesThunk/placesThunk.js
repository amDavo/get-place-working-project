import axios from "axios";
import {setAllPlaces} from "../../actions/allPlacesAction/placesAction";
import {THUNK_getCoordsFromAddress} from "../locationThunk/locationThunk";

export const getAllPlaces = (params) => async (dispatch) => {
    const response = await axios.get(`http://localhost:8080/places/${params}`)
    console.log(response.data)
    const places = response.data.map(place => {
        place.rate = place.Rates?.reduce((acc, a) => {
            acc[a.Type.type_name] = acc[a.Type.type_name] ? acc[a.Type.type_name] + a.rate_number : a.rate_number
            return acc
        }, {})
        place.rateCount = place.Rates?.reduce((acc, a) => {
            acc[a.Type.type_name] = acc[a.Type.type_name] ? acc[a.Type.type_name] + 1 : 1
            return acc
        }, {})
        return place
    })
    dispatch(setAllPlaces(places))
    dispatch(THUNK_getCoordsFromAddress(places))


}
