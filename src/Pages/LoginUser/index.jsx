import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Modal from '../../components/Modal';
import CryptoJS from 'crypto-js';

const LoginUser = () => {
    const secretKey = import.meta.env.VITE_USER_DATA_KEY;
    const secretUserRole = import.meta.env.VITE_USER_ROLE;

    const [isError, setIsError] = useState(false); // Modal xatolik holati uchun
    const [showPassword, setShowPassword] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal ochish uchun state
    const navigate = useNavigate();

    const closeModal = () => {
        setIsModalOpen(false); // Modalni yopish
    };

    const redirectToLogin = () => {
        navigate('/user-cabinet'); // Kirish sahifasiga yo'naltirish
    };

    const validationSchema = Yup.object({
        hemsId: Yup.string()
            .matches(
                /^\d{14}$/,
                "Hems ID 14 ta raqamdan iborat bo'lishi shart!"
            )
            .required('Hemis ID kiritilishi shart!'),
        password: Yup.string()
            .matches(
                /^[a-zA-Z0-9]+$/,
                "Parol A-Z, a-z, 0-9 belgilari qatnashgan bo'lishi kerak!"
            )
            .required('Parol kiritilishi shart!'),
    });

    const formik = useFormik({
        initialValues: {
            hemsId: '11111111111111',
            password: 'user123',
        },
        validationSchema,
        onSubmit: (values) => {
            // Parol va username to'g'ri bo'lsa, modalni ochish
            if (values.password === 'user123') {
                const GPA = prompt(
                    'GPA bali. bu test jarayoni uchun! Faqat raqam kiriting'
                );
                const name = prompt('Ismingizni kiriting:');

                if (GPA === null || Number(GPA) >= 3.5) {
                    const data = {
                        hemsId: values.hemsId,
                        name: name,
                        password: values.password,
                        role: secretUserRole,
                    };
                    // JSON farmatga o'tkazish
                    const stringifiedData = JSON.stringify(data);
                    // Shifrlash
                    const encryptedData = CryptoJS.AES.encrypt(
                        stringifiedData,
                        secretKey
                    ).toString();
                    // Storage ga saqlash
                    localStorage.setItem('user_data', encryptedData);
                    navigate('/user-cabinet');
                } else {
                    setIsError(true);
                    setIsModalOpen(true);
                }
            } else {
                formik.setFieldError(
                    'password',
                    "Noto'g'ri Hemis Id yoki parol!"
                );
            }
            // navigate("/cabinet"); // Foydalanuvchini shaxsiy kabinetga yo‘naltirish
        },
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="w-full flex-1 flex justify-center items-center p-4 transition">
            {!isModalOpen && (
                <form
                    onSubmit={formik.handleSubmit}
                    className="bg-white dark:bg-gray-800 shadow-lg rounded-md w-full max-w-md p-6 flex flex-col gap-4"
                >
                    <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
                        Kirish
                    </h1>

                    {/* HEMS ID */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            HEMIS ID:
                        </label>
                        <input
                            type="number"
                            name="hemsId"
                            value={formik.values.hemsId}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`mt-1 w-full border bg-white dark:bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2
                            ${
                                formik.touched.hemsId && formik.errors.hemsId
                                    ? 'border-error focus:ring-error'
                                    : 'border-gray-300 dark:border-gray-600 focus:ring-blue-400'
                            }
                        `}
                        />
                        {formik.touched.hemsId && formik.errors.hemsId && (
                            <p className="text-error text-sm mt-1">
                                {formik.errors.hemsId}
                            </p>
                        )}
                    </div>

                    {/* Parol */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Parol:
                        </label>
                        <div className="relative flex items-center mt-1">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`mt-1 w-full border bg-white dark:bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2
                            ${
                                formik.touched.password &&
                                formik.errors.password
                                    ? 'border-error focus:ring-error'
                                    : 'border-gray-300 dark:border-gray-600 focus:ring-blue-400'
                            }
                        `}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 hidden sm:block"
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                                ) : (
                                    <FaEye className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                                )}
                            </button>
                        </div>
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-error text-sm mt-1">
                                {formik.errors.password}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
                    >
                        Kirish
                    </button>
                </form>
            )}

            {/* Modalni ochish */}
            {isModalOpen && (
                <Modal
                    content={`Sizning GPA balingiz yetarli emas! Siz bu tanlovda qatnasha olmaysiz. Kelasi yil qayta urinib ko'ring.`}
                    isError={isError}
                    onClose={closeModal}
                    onRedirect={redirectToLogin}
                />
            )}
        </div>
    );
};

export default LoginUser;
