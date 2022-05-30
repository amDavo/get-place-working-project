import axios from "axios";
import {ACTION_getCoordsFromAddress} from "../../actions/locationAction/locationAction";

const API_KEY = process.env.REACT_APP_API_KEY

export const THUNK_getCoordsFromAddress = (address) => async (dispatch) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`)
        // const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=moscow&key=AIzaSyCbCXC0HvVPDYWvDl4ZSvpIUJV9g_SLfu8`)
        console.log(response.data.results[0].geometry.location, 'aaaaaaaaaaaa')
        dispatch(ACTION_getCoordsFromAddress(response.data.results[0].formatted_address))
    } catch (e) {
        console.log(e.message)
    }
}
