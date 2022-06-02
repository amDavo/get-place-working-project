import axios from "axios";
import {newPlace} from "../../actions/newPlaceAction/newPlaceAction";

export const addNewPlace = (body) => async (dispatch) => {
    const data = new FormData();
    data.append('myImg', body.file);
    data.append('location', body.location)
    data.append('place_name', body.place_name);
    data.append('category', body.category);
    data.append('free', body.free);
    data.append('working_hoursFrom', body.working_hoursFrom);
    data.append('working_hoursTo', body.working_hoursTo);
    data.append('description', body.description);
    const response = await axios.post(`http://localhost:8080/newPlace`, data,
        {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        })
    dispatch(newPlace(response.data))
}

