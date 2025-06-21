import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CryptoJS from 'crypto-js';

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

const UserProfile = () => {
    const secretKey = import.meta.env.VITE_USER_DATA_KEY;
    const encryptedData = localStorage.getItem('user_data');

    const userData = decryptUserData(encryptedData, secretKey);

    const [isEditing, setIsEditing] = useState(false);

    const validationSchema = Yup.object({
        password: Yup.string()
            .required('Parol majburiy')
            .min(6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak"),
    });

    const formik = useFormik({
        initialValues: {
            password: userData.password,
        },
        validationSchema,
        onSubmit: (values) => {
            const data = {
                ...userData,
                password: values.password,
            };
            const stringifiedData = JSON.stringify(data);
            const encryptedData = CryptoJS.AES.encrypt(
                stringifiedData,
                secretKey
            ).toString();
            localStorage.setItem('user_data', encryptedData);
            setIsEditing(false);
        },
    });

    const handleEditClick = () => setIsEditing(true);

    const handleCancelClick = () => {
        formik.resetForm();
        setIsEditing(false);
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Profil
                </h1>

                {!isEditing ? (
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
                        <button
                            className="btn btn-primary mt-4"
                            onClick={handleEditClick}
                        >
                            Tahrirlash
                        </button>
                    </div>
                ) : (
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="hemsId"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                HEMIS ID
                            </label>
                            <input
                                type="text"
                                id="hemsId"
                                value={userData.hemsId}
                                disabled
                                className="input input-bordered w-full mt-1 bg-gray-200 dark:bg-gray-600 cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                Ism
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={userData.name}
                                disabled
                                className="input input-bordered w-full mt-1 bg-gray-200 dark:bg-gray-600 cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                Parol
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`input input-bordered w-full mt-1 ${
                                    formik.touched.password &&
                                    formik.errors.password
                                        ? 'border-red-600'
                                        : ''
                                }`}
                            />
                            {formik.touched.password &&
                                formik.errors.password && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {formik.errors.password}
                                    </p>
                                )}
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                className="btn btn-error"
                                onClick={handleCancelClick}
                            >
                                Bekor qilish
                            </button>
                            <button type="submit" className="btn btn-success">
                                Saqlash
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
