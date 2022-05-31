import {initState} from "../../initState/initState";
import {CLEAR_LOCATION, GET_COORDS} from "../../types/locationTypes";

const locationReducer = (state = initState().location, action) => {
    switch (action.type) {
        case GET_COORDS:
            return [...state, action.payload];
        case CLEAR_LOCATION:
            return [];
        default:
            return state;
    }
}
export default locationReducer;
