import {
    ADD_USERS_FAVORITES,
    DELETE_FAVORITES,
    FAV,
    GET_FAVORITES,
    INFO_FAVORITES_SUCCESS
} from "../../types/favoriteTypes";

export const setUserFavorites = (userFavorites) => ({
    type: ADD_USERS_FAVORITES,
    payload: userFavorites,
})

export const setInfoFavoriteIsSuccess = (infoFavoriteIsSuccess) => ({
    type: INFO_FAVORITES_SUCCESS,
    payload: infoFavoriteIsSuccess,
})

export const getFavoriteCards = (userFavorites) => ({
    type: GET_FAVORITES,
    payload: userFavorites,
})

export const deleteFavorites = (id) => ({
    type: DELETE_FAVORITES,
    payload: id
})


