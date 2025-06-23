import { Route, Routes } from 'react-router';
import Error401 from '../../Pages/Error401';
import Error404 from '../../Pages/Error404';
import ProtectedRoute from '../ProtectedRoute';
import routes from '../../utils';
import Root from '../../roots/root';
import RootUser from '../../roots/rootUser';
import RootAdmin from '../../roots/rootAdmin';
import RootSuperAdmin from '../../roots/RootSuperAdmin';

function App() {
    return (
        <Routes>
            {/* Public routes */}
            <Route element={<Root />}>
                {routes.map((route) => {
                    if (route.role === null) {
                        const ElementRoute = route.element;
                        return (
                            <Route
                                key={route.id}
                                path={route.path}
                                element={<ElementRoute />}
                            />
                        );
                    }
                    return null;
                })}
            </Route>

            {/* SuperAdmin routes */}
            <Route element={<RootSuperAdmin />}>
                {routes.map((route) => {
                    if (route.role?.includes('superadmin')) {
                        const ElementRoute = route.element;
                        return (
                            <Route
                                key={route.id}
                                path={route.path}
                                element={
                                    <ProtectedRoute allowedRoles={route.role}>
                                        <ElementRoute />
                                    </ProtectedRoute>
                                }
                            />
                        );
                    }
                    return null;
                })}
            </Route>

            {/* Admin routes */}
            <Route element={<RootAdmin />}>
                {routes.map((route) => {
                    if (route.role?.includes('admin')) {
                        const ElementRoute = route.element;
                        return (
                            <Route
                                key={route.id}
                                path={route.path}
                                element={
                                    <ProtectedRoute allowedRoles={route.role}>
                                        <ElementRoute />
                                    </ProtectedRoute>
                                }
                            />
                        );
                    }
                    return null;
                })}
            </Route>

            {/* User routes */}
            <Route element={<RootUser />}>
                {routes.map((route) => {
                    if (route.role?.includes('user')) {
                        const ElementRoute = route.element;
                        return (
                            <Route
                                key={route.id}
                                path={route.path}
                                element={
                                    <ProtectedRoute allowedRoles={route.role}>
                                        <ElementRoute />
                                    </ProtectedRoute>
                                }
                            />
                        );
                    }
                    return null;
                })}
            </Route>

            <Route path="/not-authorized" element={<Error401 />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default App;
