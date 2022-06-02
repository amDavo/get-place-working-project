import {ADD_USERS_FAVORITES, GET_FAVORITES, INFO_FAVORITES_SUCCESS} from "../../types/favoriteTypes";

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