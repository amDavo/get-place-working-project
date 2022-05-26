import {SET_PROFILE} from "../../types/types";

export const profileInfo = (user) => ({
    type: SET_PROFILE,
    payload: user
})
