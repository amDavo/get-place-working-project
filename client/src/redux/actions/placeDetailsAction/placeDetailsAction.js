import {PLACE_DETAILS} from "../../types/types";

export const placeDetails = (place) => ({
    type: PLACE_DETAILS,
    payload: place
})