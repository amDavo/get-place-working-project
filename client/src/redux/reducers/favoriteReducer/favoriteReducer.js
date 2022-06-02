import {
    ADD_USERS_FAVORITES,
    DELETE_FAVORITES,
    GET_FAVORITES,
    INFO_FAVORITES_SUCCESS
} from "../../types/favoriteTypes";
import {initState} from "../../initState/initState";

const favoriteReducer = (state = initState().userFavorites, action) => {
    switch (action.type) {
        case ADD_USERS_FAVORITES:
            return [...state, action.payload];
        case INFO_FAVORITES_SUCCESS:
            return action.payload;
        case GET_FAVORITES:
            return action.payload
        case DELETE_FAVORITES:
            return state.filter(el => el.id !== action.payload)
        default:
            return state;
    }
}
export default favoriteReducer;

