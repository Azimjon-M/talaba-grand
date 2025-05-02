import Home from "../Pages/Home"
import Login from "../Pages/Login";

const routes = [
    {
        id: 1,
        title: "Home",
        path: "/home",
        //   icon: ,
        element: Home,
        role: ["user"],
    },
    {
        id: 2,
        title: "Login",
        path: "/login",
        //   icon: ,
        element: Login,
        role: ["user"],
    },
]

export default routes;