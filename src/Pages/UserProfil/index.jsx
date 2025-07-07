import Decryption from '../../components/Decryption';

const UserProfile = () => {
    const secretKey = import.meta.env.VITE_USER_DATA_KEY;
    const encryptedData = localStorage.getItem('user_data');

    const userData = Decryption(encryptedData, secretKey);

    return (
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Profil
                </h1>
                <div>
                    <p className="text-lg text-gray-800 dark:text-gray-300">
                        <strong>HEMIS ID:</strong> {userData.hemsId}
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-300">
                        <strong>Ism:</strong> {userData.name}
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-300">
                        <strong>Parol:</strong> ********
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
