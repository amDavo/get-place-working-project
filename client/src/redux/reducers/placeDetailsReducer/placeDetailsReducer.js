import {PLACE_DETAILS} from "../../types/types";
import {initState} from "../../../components/map/redux/initState";

export default function placeDetailsReducer(state = initState(), action) {
    switch (action.type) {
        case PLACE_DETAILS:
            return action.payload;
        // return state.map(el => el.id === action.payload.id);
        default:
            return state
    }
}