import {SET_ERROR_SIGN_IN} from "../../types/setErrorSignIn";

const errorSignInReducer = (state = false, action) => {
    switch (action.type) {
        case SET_ERROR_SIGN_IN:
            return action.payload;
        default: return state;
    }
}
export default  errorSignInReducer;