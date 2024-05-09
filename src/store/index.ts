import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";

//khai baos cho dòng 12, vì báo lỗi trong window ko có thuộc tính này
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : any ;
    }
}

const composeEhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEhancers(applyMiddleware(thunk))
    
);

export type RootState = ReturnType <typeof rootReducer> ;
export default store;