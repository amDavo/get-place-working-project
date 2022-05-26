import {initState} from "../../initState/initState";
import {SET_PROFILE} from "../../types/types";

export default function profileReducer(state = initState().user, action) {
    switch (action.type) {
        case SET_PROFILE:
            return action.payload;
        default:
            return state
    }
}
