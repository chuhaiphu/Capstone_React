import { Route } from "react-router-dom";
import HomePage from "../pages/Home";
import DetailPage from "../pages/Home/DetailPage";
import AdminPage from "../pages/Admin";
import Dashboard from "../pages/Admin/Dashboard";
import addUserPage from "../pages/Admin/AddUserPage";
import login from "../pages/Auth/LoginPage";
import signupPage from "../pages/Auth/SignupPage";
import listmovie from "../pages/Home/ListMovie";
import ProfilePage from "../pages/Home/Profile";


type TypeRoute = {
    path: string,
    element: any,
    nested?: TypeRoute[],
}

const routes: TypeRoute[] = [
    {

        path: "",
        element: HomePage,
        nested:[
            {path: "detail/:id", element: DetailPage},
            {path: "profile", element: ProfilePage},
            {path: "", element: listmovie},
        ]
    },
    {
        path: "admin",
        element: AdminPage,
        nested: [
            {path: "dashboard", element: Dashboard},
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
