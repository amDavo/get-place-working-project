import {GET_COORDS} from "../../types/locationTypes";


export const ACTION_getCoordsFromAddress = (item) => ({
    type: GET_COORDS,
    payload: item
})
