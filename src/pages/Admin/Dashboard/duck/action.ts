import { Action } from "../../../../store/types";
import * as ActionType from "./constant";
import { Movie } from "../../../../store/types";
import api from "../../../../utils/apiUtils";


const acListMovieRequest = ():Action => {
    return{
        type: ActionType.DASHBOARD_LIST_MOVIE_REQUEST,
    }
};

const acListMovieSuccess = (data:Movie[]):Action =>{
    return{
        type: ActionType.DASHBOARD_LIST_MOVIE_SUCCESS,
        payload: data,
    }
};

const acListMovieFails = (error : any):Action => {
    return{
        type: ActionType.DASHBOARD_LIST_MOVIE_FAILED,
        payload: error,
    }
}

export const acFetchListMovie = () => {
    return(dispatch:any) => {
        dispatch(acListMovieRequest())

        api 
            .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result) => {
                dispatch(acListMovieSuccess(result.data.content))
            })
            .catch((error)=>{
                dispatch(acListMovieFails(error))
            })
            

    }
}