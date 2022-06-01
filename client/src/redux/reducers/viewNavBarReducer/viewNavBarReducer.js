import {initState} from "../../initState/initState";
import {SET_VIEW_NAVBAR} from "../../types/viewNavBarTypes";

export default function viewNavBarReducer(state = initState().viewNavBar, action) {
    switch (action.type) {
        case SET_VIEW_NAVBAR:
            return action.payload;
        default:
            return state
    }
}