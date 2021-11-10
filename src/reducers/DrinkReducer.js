import { SET_DRINK } from "./actions/actionTypes";

const initialState = []

const drinkReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DRINK:
            return state = [action.payload]
    default:
            return state;
    }
}

export default drinkReducer;