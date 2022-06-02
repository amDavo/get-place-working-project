import {setUserFavorites, setInfoFavoriteIsSuccess} from "../../actions/favoriteAction/favorite.action";
import axios from "axios";

axios.defaults.withCredentials = true
export const addFavorite = (placeId) => async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:8080/favorite/${placeId}`)
        if (response?.data) {
            dispatch(setUserFavorites(response?.data))
        }
    } catch (error) {
        dispatch(setInfoFavoriteIsSuccess('Ошибка при добавлении в избранное'))
    }
}


// export const getFavorite = () => async (dispatch) => {
//     try {
//         const response = await axios (`http://localhost:8080/favorite`)
//         if(response?.data) {
//             dispatch(getFavoriteCards(response?.data))
//         }
//     } catch (error) {
//         dispatch(setInfoFavoriteIsSuccess('Ошибка при добавлении в избранное'))
//     }
// }