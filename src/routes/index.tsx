import { Route } from "react-router-dom";
import HomeTemplate from "../pages/Home/HomePage";
import DetailPage from "../pages/Home/DetailPage";
import adminPage from "../pages/Admin";
import dashboard from "../pages/Admin/Dashboard";
import addUserPage from "../pages/Admin/AddUserPage";
import login from "../pages/Auth/LoginPage";
import signupPage from "../pages/Auth/SignupPage";
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
        path: "sign-up",
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
