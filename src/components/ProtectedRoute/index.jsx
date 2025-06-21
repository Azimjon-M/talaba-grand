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
    const encryptedData = localStorage.getItem('user_data');

    // Agar ma'lumot yo'q bo'lsa, not-authorized sahifasiga o'tadi
    if (!encryptedData) {
        return <Navigate to="/not-authorized" replace />;
    }

    const userData = decryptUserData(encryptedData, secretKey);

    // Agar dekodlash muvaffaqiyatsiz yoki foydalanuvchi roli yo'q bo'lsa
    if (!userData || !userData.role) {
        return <Navigate to="/not-authorized" replace />;
    }

    // Ruxsat etilgan rollar orasida foydalanuvchi roli mavjud emas
    if (!allowedRoles.includes(userData.role)) {
        return <Navigate to="/not-authorized" replace />;
    }

    return children;
};

export default ProtectedRoute;
