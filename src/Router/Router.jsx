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

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/featured-roommates'),
                element: <Home></Home>
            },
            {
                path: '/findRoommate',
                element: <FindRoommate></FindRoommate>
            },
            {
                path: '/myListing',
                element: <MyListing></MyListing>
            },
            {
                path: '/browseListing',
                element: <BrowserList></BrowserList>
            },
            {
                path: '/allPosts',
                element: <AllPosts></AllPosts>
            },
            {
                path: '/postDetails/:id',
                loader:({params}) => fetch(`http://localhost:3000/roommates/${params.id}`),
                element: <DetailsPost></DetailsPost>
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