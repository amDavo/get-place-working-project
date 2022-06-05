import {GET_PLACES, SET_PLACES} from "../../types/types";
import {listClasses} from "@mui/material";

export const setAllPlaces = (list) => ({
    type: SET_PLACES,
    payload: list
})

export const ggetAllPlaces = (list) => ({
    type: GET_PLACES,
    payload: list
})