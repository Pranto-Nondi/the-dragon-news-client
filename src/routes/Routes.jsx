import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import DetailsCard from "../pages/Home/DetailsCard/DetailsCard";
import DetailsNews from "../layout/DetailsNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: 'categories/:id',
                element: <Category />,
                loader: (({ params }) => fetch(`http://localhost:5000/categories/${params.id}`))

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
                loader: (({ params }) => fetch(`http://localhost:5000/news/${params.id}`))

            }
        ]
    }
])

export default router