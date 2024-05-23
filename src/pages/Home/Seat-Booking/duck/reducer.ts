import { error } from "console";
import { Action, DatveSeat, AppStateSeat } from "../../../../store/types";
import * as ActionType from "./constants";

const initalState:AppStateSeat<DatveSeat> = {
    loading : false,
    data : null,
    error: null,
};
const seatBookingReducer = (state= initalState, action : Action) => {
    switch(action.type){
        case ActionType.SEAT_BOOKING_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return{...state}
        }
        case ActionType.SEAT_BOOKING_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return{...state}
        }
        case ActionType.SEAT_BOOKING_FAILED: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return{...state}
        }
        default:
            return{...state}
    }
};
export default seatBookingReducer;