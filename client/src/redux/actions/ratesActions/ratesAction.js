import {SET_RATES} from "../../types/types";

export const enableLoader = (rates) => ({
    type: SET_RATES,
    payload: rates
});
