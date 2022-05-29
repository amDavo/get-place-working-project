import {PLACE_DETAILS} from "../../types/types";
import {initState} from "../../initState/initState";

export default function placeDetailsReducer(state = initState().allPlaces, action) {
    switch (action.type) {
        case PLACE_DETAILS:
            return state.map(el => el.id === action.payload.id);
        default:
            return state
    }
}