import { Route } from "react-router-dom";
import HomeTemplate from "../pages/Home/HomePage";
import DetailPage from "../pages/Home/DetailPage";
import adminPage from "../pages/AdminPage";
import dashboard from "../pages/AdminPage/Dashboard";
import addUserPage from "../pages/AdminPage/AddUserPage";
import login from "../pages/LoginPage";
import signupPage from "../pages/SignupPage";
import listmovie from "../pages/Home/ListMovie";




type TypeRoute = {
    path: string,
    element: any,
    nested?: TypeRoute[],
}

const routes: TypeRoute[] = [
    {

        path: "",
        element: HomeTemplate,
        nested:[
            {path: "detail/:id", element: DetailPage},
            {path: "", element: listmovie},
        ]
    },
    {
        path: "admin",
        element: adminPage,
        nested: [
            {path: "dashboard", element: dashboard},
            {path: "add-user", element: addUserPage}
        ]
    },
    {
        path: "login",
        element: login,
    },
    {
        path: "login/sign-up",
        element: signupPage,
    }
]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) { 
            return(
                <Route path={route.path} element={<route.element/>}>
                    {
                        route.nested.map((item)=>(<Route path={item.path} element={<item.element/>}/>))
                    }
                </Route>
            )
        } else {
            return <Route key={route.path} path={route.path} element={<route.element />} />
        }
    })
}

export default renderRoutes;
