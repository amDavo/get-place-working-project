import {ADD_USERS_FAVORITES, INFO_FAVORITES_SUCCESS} from "../../types/favoriteTypes";

const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_USERS_FAVORITES:
            return action.payload;
        case INFO_FAVORITES_SUCCESS:
            return action.payload;
        default: return state;
    }
}
export default  favoriteReducer;