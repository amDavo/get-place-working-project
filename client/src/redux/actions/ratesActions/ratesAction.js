import {SET_RATES} from "../../types/types";

export const rateAction = (rates) => ({
    type: SET_RATES,
    payload: rates
});
