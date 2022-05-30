import {initState} from "../../initState/initState";
import {ADD_PLACE} from "../../types/types";

export default function placeDetailsReducer(state = initState().allPlaces, action) {
    switch (action.type) {
        case ADD_PLACE:
            return [...state, action.payload]
        default:
            return state
    }
}