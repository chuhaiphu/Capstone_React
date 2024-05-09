import { error } from "console";
import { Action } from "../../../../store/types";
import api from "../../../../utils/apiUtils";
import * as ActionType from "./constants";


const actMovieDetailRequest = ():Action => {
    return {
        type: ActionType.MOVIE_DETAIL_REQUEST,
    }
};
const actMovieDetailSuccess = (data:any):Action => {
    return {
        type: ActionType.MOVIE_DETAIL_SUCCESS,
        payload: data,
    }
};
const actMovieDetailFailed = (error :any):Action =>{
    return {
        type: ActionType.MOVIE_DETAIL_FAILED,
        payload: error,
    }
}

export const actFetchMovieDetail = (id:string) =>{
    return (dispatch :any) => {
        dispatch(actMovieDetailRequest())

        api
            .get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
            .then((result)=>{
                dispatch(actMovieDetailSuccess(result.data.content))
            })
            .catch((error)=>{
                dispatch(actMovieDetailFailed(error))
            })
    }
}