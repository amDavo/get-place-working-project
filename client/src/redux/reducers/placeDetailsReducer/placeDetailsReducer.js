import {PLACE_DETAILS} from "../../types/types";
import {initState} from "../../initState/initState";

export default function placeDetailsReducer(state = initState().placeDetails, action) {
    switch (action.type) {
        case PLACE_DETAILS:
            return action.payload;
        default:
            return state
    }
}