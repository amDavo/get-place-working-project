import axios from "axios";

export const setRatings = (data) => async (dispatch) => {
    const response = await axios.post(`http://localhost:8080/rates`, data)
    
    console.log(response.data, 'ssssqqqqeeeee')
}