import { SET_IS_UNIQUE_NICK_NAME} from "../types/userTypes";

const nickNameReducer = (state = false, action) => {
    switch (action.type) {
        case SET_IS_UNIQUE_NICK_NAME:
            return action.payload;

        default: return state;
    }
}
export default  nickNameReducer;

