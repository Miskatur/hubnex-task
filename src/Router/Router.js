import { createBrowserRouter } from "react-router-dom";
import ServicesNavbar from "../components/NavbarItems/ServicesNavbar";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <ServicesNavbar></ServicesNavbar>
            }
        ]
    }
])