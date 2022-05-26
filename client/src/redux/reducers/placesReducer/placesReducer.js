import {initState} from "../../initState/initState";
import {SET_PLACES} from "../../types/types";

export default function placesReducer(state = initState().allPlaces, action) {
    switch (action.type) {
        case SET_PLACES:
            return action.payload
        default:
            return state
    }
}