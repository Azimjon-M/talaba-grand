import Home from "../Pages/Home";
import Service from "../Pages/Service";
import LoginUser from "../Pages/LoginUser";

const routes = [
    {
        id: 1,
        title: "Home",
        path: "/",
        //   icon: ,
        element: Home,
        role: ["user"],
    },
    {
        id: 2,
        title: "Service",
        path: "/service",
        //   icon: ,
        element: Service,
        role: ["user"],
    },
    {
        id: 3,
        title: "LoginUser",
        path: "/login-user",
        //   icon: ,
        element: LoginUser,
        role: ["user"],
    },
];

export default routes;
