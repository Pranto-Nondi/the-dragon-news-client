import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import DetailsCard from "../pages/Home/DetailsCard/DetailsCard";
import DetailsNews from "../layout/DetailsNews";
import Login from "../layout/Login";
import SignIn from "../pages/Home/SignIn/SignIn";

import Register from "../pages/Home/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: (() => fetch(`http://localhost:5000/news`))
            },
            {
                path: 'categories/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)

            },

        ]
    },
    {
        path: 'news',
        element: <DetailsNews />,
        children: [
            {
                path: ':id',
                element: <DetailsCard />,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)

            }
        ]
    },
    {
        path: 'login',
        element: <Login />,
        children: [
            {
                path: '/login',
                element: <SignIn />
            }
        ]
    },
    {
        path: 'register',
        element: <Login />,
        children: [
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router