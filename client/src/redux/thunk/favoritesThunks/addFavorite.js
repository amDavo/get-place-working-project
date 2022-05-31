import {setInfoFavoriteIsSuccess} from "../../actions/favoriteAction/favorite.action";
import axios from "axios";
axios.defaults.withCredentials=true
export const addFavorite = (placeId) => async(dispatch) => {
    try {
        const response = await axios.post(`http://localhost:8080/favorite/${placeId}`)
        if(response?.data){
            dispatch(setInfoFavoriteIsSuccess('Успешно добавлено в избранное'))
        }
    }
    catch (error) {
        dispatch(setInfoFavoriteIsSuccess('Ошибка при добавлении в избранное'))
    }

}
