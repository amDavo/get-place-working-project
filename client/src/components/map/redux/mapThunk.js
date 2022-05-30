import axios from "axios";
import {ACTION_getMarkerAddress} from "./markerAction";

const API_KEY = process.env.REACT_APP_API_KEY

export const THUNK_getMarkerAddress = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${API_KEY}`)
        console.log(response, 'aa')
        dispatch(ACTION_getMarkerAddress(response.data))
    } catch (e) {
        console.log(e.message)
    }
}
