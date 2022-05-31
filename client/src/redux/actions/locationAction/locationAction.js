import {CLEAR_LOCATION, GET_COORDS} from "../../types/locationTypes";


export const ACTION_getCoordsFromAddress = (item) => ({
    type: GET_COORDS,
    payload: item
})

export const ACTION_clearLocation = () => ({
    type: CLEAR_LOCATION,
})
