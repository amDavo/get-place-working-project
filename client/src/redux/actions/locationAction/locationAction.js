import {CLEAR_LOCATION, GET_COORDS} from "../../types/locationTypes";


export const ACTION_getCoordsFromAddress = (coords) => ({
    type: GET_COORDS,
    payload: coords
})

export const ACTION_clearLocation = () => ({
    type: CLEAR_LOCATION,
})
