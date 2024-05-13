import { Action, AppStateDetails } from "../../../../store/types";
import * as ActionType from "./constants"


const initalState:AppStateDetails<any> = {
    loading : false,
    data : null,
    error : null,
}

const signUpUserReducer = (state = initalState, action: Action) => {
    switch (action.type) {
        case ActionType.USER_REGISTER_REQUEST:{
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }
        case ActionType.USER_REGISTER_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error =null;
            return{...state}
        }
        case ActionType.USER_REGISTER_FAILED: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;  
            return{...state}
        }
        default:
            return { ...state };
    }
}
export default signUpUserReducer;