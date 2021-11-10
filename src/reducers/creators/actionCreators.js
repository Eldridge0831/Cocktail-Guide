import { SET_DRINK } from "../actions/actionTypes";

export const setDrinkSelection = (data) => {
    return {
        type: SET_DRINK,
        payload: data
    }
}