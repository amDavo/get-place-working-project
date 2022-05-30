import {initState} from "./initState";
import {GET_ADDRESS} from "./types";

export default function markerReducer(state = initState().address, action) {
    switch (action.type) {
        case GET_ADDRESS:
            return action.payload
        default:
            return state
    }
}
