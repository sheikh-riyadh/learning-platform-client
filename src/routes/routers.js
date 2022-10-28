import { createBrowserRouter } from "react-router-dom";
import AddToCart from "../components/AddToCart/AddToCart";
import Blogs from "../components/Blogs/Blogs";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Error from "../components/Error/Error";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

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
                element: <Courses></Courses>,
                loader: () => fetch(`https://course-server-eight.vercel.app/courses`)
            },
            {
                path: '/details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://course-server-eight.vercel.app/courses/${params.id}`)

            }, {
                path: '/add-to-cart/:id',
                element: <PrivateRoute><AddToCart></AddToCart></PrivateRoute>,
                loader: ({ params }) => fetch(`https://course-server-eight.vercel.app/details/${params.id}`)
            }, {
                path: '*',
                element: <Error></Error>
            }

        ]
    }
])