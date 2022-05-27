import {ADD_PLACE} from "../../types/types";

export const newPlace = (newPlace) => ({
    type: ADD_PLACE,
    payload: newPlace
})