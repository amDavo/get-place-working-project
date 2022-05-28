import axios from "axios";
import {placeDetails} from "../../actions/placeDetailsAction/placeDetailsAction";
import {useParams} from "react-router-dom";


export const getPlaceDetails = () => async (dispatch) => {
    const params = useParams()
    const response = await axios.get(`http://localhost:8080/location/${params.id}`)
    dispatch(placeDetails(response.data))
}