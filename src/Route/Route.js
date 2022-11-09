import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Services from "../component/Services/Services";
import Login from '../component/Login/Login'
import Register from "../component/Register/Register";
import Main from "../layout/Main";
import Blog from "../component/Blog/Blog";
import ServiceDetails from "../component/ServicesDetails/ServiceDetails";
import MyReview from "../component/MyReview/MyReview";
import ErrorPage from "../component/ErrorPage/ErrorPage";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('http://localhost:4001/services')
                
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:4001/services/${params.id}`)

            },
            {
                path:'/myreview',
                element:<MyReview></MyReview>

            },
            {
                path:'/blog',
                element:<Blog></Blog>

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