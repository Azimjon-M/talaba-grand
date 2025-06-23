import { Navigate } from 'react-router';
import CryptoJS from 'crypto-js';

// Ma'lumotni dekodlash funksiyasi
const decryptUserData = (encryptedData, secretKey) => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    } catch (error) {
        console.error('Dekodlashda xatolik:', error);
        return null;
    }
};

const ProtectedRoute = ({ children, allowedRoles }) => {
    const secretKey = import.meta.env.VITE_USER_DATA_KEY;

    // LocalStorage'dan ma'lumotlarni olish
    const encryptedData =
        localStorage.getItem('admin_data') || localStorage.getItem('user_data');

    if (!encryptedData) {
        return <Navigate to="/not-authorized" replace />;
    }

    const userData = decryptUserData(encryptedData, secretKey);

    // Dekodlash muvaffaqiyatsiz yoki roli mavjud emas
    if (!userData || !userData.role) {
        return <Navigate to="/not-authorized" replace />;
    }

    // Ruxsat etilgan rollar bilan solishtirish
    const { VITE_USER_ROLE, VITE_ADMIN_ROLE, VITE_SUPERADMIN_ROLE } =
        import.meta.env;

    const roleMapping = {
        user: VITE_USER_ROLE,
        admin: VITE_ADMIN_ROLE,
        superadmin: VITE_SUPERADMIN_ROLE,
    };

    if (!allowedRoles.includes(roleMapping[userData.role])) {
        return <Navigate to="/not-authorized" replace />;
    }

    return children;
};

export default ProtectedRoute;
