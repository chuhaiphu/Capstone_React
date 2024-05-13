import * as  ActionType from "./constant";
import { Movie , AppState , Action } from "../../../../store/types"

const initalState:AppState<Movie> = {
    loading: false,
    data: null,
    error: null,
}

const dashboardMovieReducer = (state = initalState, action: Action) => {
    switch(action.type){
        case ActionType.DASHBOARD_LIST_MOVIE_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return{...state}
        }
        case ActionType.DASHBOARD_LIST_MOVIE_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return{...state}
        }
        case ActionType.DASHBOARD_LIST_MOVIE_FAILED: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return{...state}
        }
        default:
            return{...state}
    }
}
export default dashboardMovieReducer;