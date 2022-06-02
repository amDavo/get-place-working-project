import {GET_RATES, SET_RATES} from "../../types/types";
import {initState} from "../../initState/initState";


export default function ratesReducer(state = initState().ratings, action) {
    switch (action.type) {
        case SET_RATES:
            return action.payload
        case GET_RATES:
            return action.payload
        default:
            return state
    }
}