import { Action } from "../../../store/types"
import api from "../../../utils/apiUtils"
import * as ActionType from "./constants"


export const actFetchUserLogin = (user: {
    taiKhoan: string,
    matKhau: string
}) => {
    return (dispatch: any) => {  
        dispatch(actUserLoginRequest())

        //CALL API
        api
            .post(`/QuanLyNguoiDung/DangNhap`, user)
            .then((response) => {
                localStorage.setItem("user", JSON.stringify(response.data.content));
                dispatch(actUserLoginSuccess(response.data.content))
            })
            .catch((error: any) => {
                dispatch(actUserLoginFailed(error))
            })
    }
}

const actUserLoginRequest = (): Action => {
    return {
        type: ActionType.USER_LOGIN_REQUEST,
    }
};

const actUserLoginSuccess = (data: any): Action => {
    return {
        type: ActionType.USER_LOGIN_SUCCESS,
        payload: data,
    }
};

const actUserLoginFailed = (error: any): Action => {
    return {
        type: ActionType.USER_LOGIN_FAILED,
        payload: error,
    }
}