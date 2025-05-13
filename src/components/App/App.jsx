import { Route, Routes } from "react-router";
import Error401 from "../../Pages/Error401";
import Error404 from "../../Pages/Error404";
// import ProtectedRoute from "../ProtectedRoute";
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
                                // <ProtectedRoute allowedRoles={route.role}>
                                <ElementRoute />
                                // </ProtectedRoute>
                            }
                        />
                    );
                })}
            </Route>
            {/* <Route path="/login-admin" element={<LoginAdmins />} /> */}
            <Route path="/not-authorized" element={<Error401 />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default App;
