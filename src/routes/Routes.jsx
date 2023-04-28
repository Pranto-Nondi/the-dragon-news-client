import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import DetailsCard from "../pages/Home/DetailsCard/DetailsCard";
import DetailsNews from "../layout/DetailsNews";
import Login from "../layout/Login";
import SignIn from "../pages/Home/SignIn/SignIn";
import Register from "../pages/Home/Register/Register";
import Career from "../pages/Home/Career/Career";
import About from "../pages/Home/About/About";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "../pages/Home/Profile/Profile";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: (() => fetch(`https://the-dragon-news-server-tawny.vercel.app/news`))
            },
            {
                path: 'categories/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-tawny.vercel.app/categories/${params.id}`)

            },

        ]
    },
    {
        path: 'news',
        element: <PrivateRoute><DetailsNews /></PrivateRoute>,
        children: [
            {
                path: ':id',
                element: <DetailsCard />,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-tawny.vercel.app/news/${params.id}`)

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
            },

        ]
    },
    {
        path: 'career',
        element: <Login />,
        children: [
            {
                path: '/career',
                element: <PrivateRoute><Career /></PrivateRoute>
            }

        ]
    },
    {
        path: 'about',
        element: <Login />,
        children: [
            {
                path: '/about',
                element: <PrivateRoute><About /></PrivateRoute>,
            }


        ]
    },
    {
        path: 'profile',
        element: <Login />,
        children: [
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            }


        ]
    }

])

export default router