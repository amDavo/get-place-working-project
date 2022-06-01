import {initState} from "../../../components/map/redux/initState";
import {SET_RATES} from "../../types/types";


export default function ratesReducer(state = initState().ratings, action) {
    switch (action.type) {
        case SET_RATES:
            return [...state, action.payload];
        default:
            return state
    }
}