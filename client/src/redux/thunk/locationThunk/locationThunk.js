import axios from "axios";
import {ACTION_getCoordsFromAddress} from "../../actions/locationAction/locationAction";

const API_KEY = process.env.REACT_APP_API_KEY

export const THUNK_getCoordsFromAddress = (list) => async (dispatch) => {
    try {
        const createListWithCoords = Promise.all(list.map(async (item) => {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${item.location}&key=${API_KEY}`, {withCredentials: false})
            item.coords = response.data.results[0].geometry.location
            return item;
        }))
        dispatch(ACTION_getCoordsFromAddress(await createListWithCoords))
    } catch (e) {
        console.log(e.message)
    }
}
