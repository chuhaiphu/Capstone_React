import {combineReducers} from "redux";
import listMovieReducer from "../pages/Home/ListMovie/duck/reducer";
import movieDetailsReducer from "../pages/Home/DetailPage/duck/reducer";
import userReducer from "../pages/LoginPage/duck/reducer";


const rootReducer = combineReducers({
    listMovieReducer,
    movieDetailsReducer,
    userReducer,
})
export default rootReducer;