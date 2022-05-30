import axios from "axios";

export const addNewPlace = (body) => async (dispatch) => {
    const response = await axios.post(`http://localhost:8080/newPlace`, body)
}