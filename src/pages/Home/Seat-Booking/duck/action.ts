
import api from "../../../../utils/apiUtils";
import * as ActionType from "./constants";


const acSeatBookingRequest = () => {
    return {
        type: ActionType.SEAT_BOOKING_REQUEST
    }
};
const acSeatBookingSuccess = (data:any) => {
    return {
        type: ActionType.SEAT_BOOKING_SUCCESS,
        payload : data,
    }
};
const acSeatBookingFailed = (error:any) => {
    return{
        type: ActionType.SEAT_BOOKING_FAILED,
        payload: error,
    }
};

export const acFetchSeatBooking = (id :string) => {

    return(dispatch:any) => {
        dispatch(acSeatBookingRequest())
        api
            .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
            .then((result) => {
                dispatch(acSeatBookingSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(acSeatBookingFailed(error))
            })
    }
}

