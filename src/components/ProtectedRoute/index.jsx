import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext"; // Auth contextingiz bo‘lishi kerak

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useAuth(); // user: { role: "admin" | "user" | null }
    const location = useLocation();

    if (!user) {
        // Agar login qilmagan bo‘lsa
        return <Navigate to="/login-user" state={{ from: location }} replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        // Agar role mos kelmasa
        return <Navigate to="/not-authorized" replace />;
    }

    return children;
};

export default ProtectedRoute;
