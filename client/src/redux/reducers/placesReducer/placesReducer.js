import {initState} from "../../initState/initState";
import {ADD_PLACE, SET_PLACES} from "../../types/types";
import {CLEAR_LOCATION, GET_COORDS} from "../../types/locationTypes";

export default function placesReducer(state = initState().allPlaces, action) {
    switch (action.type) {
        case SET_PLACES:
            return action.payload
        case ADD_PLACE:
            return [...state, action.payload]
        case GET_COORDS:
            return action.payload
        case CLEAR_LOCATION:
            return state.map(item => {
                delete item.coords
                return item
            })

        default:
            return state
    }
}
