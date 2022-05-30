import {GET_ADDRESS} from "./types";

export const ACTION_getMarkerAddress = (marker) => ({
    type: GET_ADDRESS,
    payload: marker
})
