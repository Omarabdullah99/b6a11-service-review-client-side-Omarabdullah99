import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Login from '../component/Login/Login'
import Register from "../component/Register/Register";
import Main from "../layout/Main";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
export default router