import { Route, Routes } from "react-router";
// import Home from "../../Pages/Home";
import LoginAdmins from "../../Pages/LoginAdmins";
// import Service from "../../Pages/Service";
import Error401 from "../../Pages/Error401";
import Error404 from "../../Pages/Error404";
// import ProtectedRoute from "../components/ProtectedRoute";
import routes from "../../utils";
import Root from "../../root";

function App() {
    return (
        <Routes>
            <Route element={<Root />}>
                {routes.map((route) => {
                    const ElementRoute = route.element;

                    return (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                // <ProtectedRoute allowedRoles={Route.role}>
                                <ElementRoute />
                                // </ProtectedRoute>
                            }
                        />
                    );
                })}
            </Route>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/login-user" element={<LoginUser />} /> */}
            <Route path="/login-admin" element={<LoginAdmins />} />
            {/* <Route path="/service" element={<Service />} /> */}
            <Route path="/not-authorized" element={<Error401 />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default App;
