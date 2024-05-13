import { Action } from "../../../../store/types"
import api from "../../../../utils/apiUtils"
import * as ActionType from "./constants"


export const actFetchUserSignUp = (signUpUser: {
    taiKhoan: string,
    matKhau: string,
    email: string,
    soDt: string,
    maNhom: string,
    hoTen: string,
}) => {
    return (dispatch: any) => {  
        dispatch(actUserSignUpRequest())
        //CALL API
        api
            .post(`/QuanLyNguoiDung/DangKy`, signUpUser)
            .then((response) => {
                dispatch(actUserSignUpSuccess(response.data.content))
            })
            .catch((error: any) => {
                dispatch(actUserSignUpFailed(error))
            })
    }
}

const actUserSignUpRequest = (): Action => {
    return {
        type: ActionType.USER_REGISTER_REQUEST,
    }
};

const actUserSignUpSuccess = (data: any): Action => {
    return {
        type: ActionType.USER_REGISTER_SUCCESS,
        payload: data,
    }
};

const actUserSignUpFailed = (error: any): Action => {
    return {
        type: ActionType.USER_REGISTER_FAILED,
        payload: error,
    }
}