import axios from "axios";
import {newPlace} from "../../actions/newPlaceAction/newPlaceAction";

export const addNewPlace = (body) => async (dispatch) => {
    const response = await axios.post(`http://localhost:8080/newPlace`, {
        data: body,
        headers: {'Content-Type': "multipart/form-data"}
    })
    console.log(response, 'wow')
    dispatch(newPlace(response.data))
}