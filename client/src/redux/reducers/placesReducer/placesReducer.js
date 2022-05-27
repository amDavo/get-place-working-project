import {initState} from "../../initState/initState";
import {ADD_PLACE, SET_PLACES} from "../../types/types";

export default function placesReducer(state = initState().allPlaces, action) {
    switch (action.type) {
        case SET_PLACES:
            return action.payload
        case ADD_PLACE:
            return [...state, action.payload]
        default:
            return state
    }
}