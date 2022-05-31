import {initState} from "../../initState/initState";
import {GET_COORDS} from "../../types/locationTypes";

const locationReducer = (state = initState().location, action) => {
    switch (action.type) {
        case GET_COORDS:
            return action.payload;
        default:
            return state;
    }
}
export default locationReducer;
