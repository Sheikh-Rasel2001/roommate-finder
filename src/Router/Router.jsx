import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import FindRoommate from "../Pages/FindRoommate";
import MyListing from "../Pages/MyListing";
import BrowserList from "../Pages/BrowserList";
import AllPosts from "../Pages/AllPosts";
import DetailsPost from "../Pages/DetailsPost";
import AuthLayout from "../Authentication/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRouter from "../Authentication/PrivateRouter";
import Loading from "../Component/Loading";
import UpdatePost from "../Pages/UpdatePost";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/featured-roommates'),
                element: <Home></Home>
            },
            {
                path: '/findRoommate',
                element: <PrivateRouter>
                    <FindRoommate></FindRoommate>
                </PrivateRouter>
            },
            {
                path: '/myListing',
                element: <PrivateRouter>
                    <MyListing></MyListing>
                </PrivateRouter>
            },
            {
                path: '/browseListing',
                loader: () => fetch('http://localhost:3000/roommates'),
                element: <PrivateRouter>
                    <BrowserList></BrowserList>
                </PrivateRouter>
            },

            {
                path: '/postDetails/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
                element: <PrivateRouter>
                    <DetailsPost></DetailsPost>
                </PrivateRouter>
            },

            {
                path: '/updatePost/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
                element: <UpdatePost></UpdatePost>
            }
        ]
    }, //main layout route end
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;