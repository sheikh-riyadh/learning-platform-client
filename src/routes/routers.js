import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/home',
                element: <Home></Home>
            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/register',
                element: <Register></Register>
            }, {
                path: '/faq',
                element: <Faq></Faq>
            }, {
                path: '/blogs',
                element: <Blogs></Blogs>
            }, {
                path: '/courses',
                element: <CourseLayout></CourseLayout>,
                children: [
                    {

                    }
                ]
            }
        ]
    }
])