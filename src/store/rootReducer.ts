import {combineReducers} from "redux";
import listMovieReducer from "../pages/Home/ListMovie/duck/reducer";
import movieDetailsReducer from "../pages/Home/DetailPage/duck/reducer";
import userReducer from "../pages/Auth//LoginPage/duck/reducer";
import dashboardMovieReducer from "../pages/Admin/Dashboard/duck/reducer";
import signUpUserReducer from "../pages/Auth/SignupPage/duck/reducer";
import seatBookingReducer from "../pages/Home/Seat-Booking/duck/reducer";


const rootReducer = combineReducers({
    listMovieReducer,
    movieDetailsReducer,
    dashboardMovieReducer,
    userReducer,
    signUpUserReducer,
    seatBookingReducer,

})
export default rootReducer;