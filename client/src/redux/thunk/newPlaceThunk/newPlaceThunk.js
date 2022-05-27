import axios from "axios";
import {newPlace} from "../../actions/newPlaceAction/newPlaceAction";

export const addNewPlace = (body) => async (dispatch) => {
    const response = await axios.post(`http://localhost:8080/newPlace/add`, body)
    console.log(response)
    dispatch(newPlace(response.data))
}