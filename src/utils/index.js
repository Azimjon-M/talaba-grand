import Home from "../Pages/Home";
import Service from "../Pages/Service";
import LoginUser from "../Pages/LoginUser";
import SignIn from "../Pages/SignIn";
import LoginAdmins from "../Pages/LoginAdmins";


const routes = [
    {
        id: 1,
        title: "Home",
        path: "/",
        //   icon: ,
        element: Home,
        role: null,
    },
    {
        id: 2,
        title: "Service",
        path: "/service",
        //   icon: ,
        element: Service,
        role: null,
    },
    {
        id: 3,
        title: "LoginUser",
        path: "/login-user",
        //   icon: ,
        element: LoginUser,
        role: null,
    },
    {
        id: 4,
        title: "SignInUser",
        path: "/signin-user",
        //   icon: ,
        element: SignIn,
        role: null,
    },
    {
        id: 5,
        title: "LoginAdmin",
        path: "/login-admin",
        //   icon: ,
        element: LoginAdmins,
        role: null,
    },
];

export default routes;
