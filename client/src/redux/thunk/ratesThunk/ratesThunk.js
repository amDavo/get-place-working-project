import axios from "axios";
import {rateAction} from "../../actions/ratesActions/ratesAction";

export const setRatings = (data) => async (dispatch) => {
    const response = await axios.post(`http://localhost:8080/rates`, data)
    dispatch(rateAction(response.data))
}