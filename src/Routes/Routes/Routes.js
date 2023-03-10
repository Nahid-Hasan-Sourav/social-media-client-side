import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivaterRourte from "../PrivateRoute/PrivaterRourte";


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<PrivaterRourte><Home></Home></PrivaterRourte>
            },
            {
                path:'/home',
                element:<PrivaterRourte><Home></Home></PrivaterRourte>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
    
])