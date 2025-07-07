import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Modal from '../../components/Modal'; // Modalni import qilamiz
import { useNavigate } from 'react-router';
import Encryption from '../../components/Encryption';

const AdminLogin = () => {
    const secretKey = import.meta.env.VITE_USER_DATA_KEY;
    const secretAdminRole = import.meta.env.VITE_ADMIN_ROLE;
    const secretSuperAdminRole = import.meta.env.VITE_SUPERADMIN_ROLE;

    const [isModalOpen, setIsModalOpen] = useState(false); // Modal ochish uchun state
    const navigate = useNavigate();

    const closeModal = () => {
        setIsModalOpen(false); // Modalni yopish
    };

    const redirectToDashboard = () => {
        navigate('/admin-cabinet'); // Admin dashboard sahifasiga yo'naltirish
    };

    const [showPassword, setShowPassword] = useState(false);

    const validationSchema = Yup.object({
        username: Yup.string().required('Username talab qilinadi!'),
        password: Yup.string()
            .matches(
                /^[a-zA-Z0-9]+$/,
                "Parol A-Z, a-z, 0-9 belgilari qatnashgan bo'lishi shart!"
            )
            .required('Parol talab qilinadi!'),
    });

    // Formik setup
    const formik = useFormik({
        initialValues: {
            username: 'superadmin',
            password: 'admin123',
        },
        validationSchema,
        onSubmit: (values) => {
            if (
                values.username === 'superadmin' &&
                values.password === 'admin123'
            ) {
                const data = {
                    username: values.username,
                    password: values.password,
                    role: secretSuperAdminRole,
                };
                // Storage ga saqlash
                localStorage.setItem('admin_data', Encryption(data, secretKey));
                navigate('/superadmin-cabinet');
            } else if (
                values.username === 'admin' &&
                values.password === 'admin123'
            ) {
                const data = {
                    username: values.username,
                    password: values.password,
                    role: secretAdminRole,
                };
                // Storage ga saqlash
                localStorage.setItem('admin_data', Encryption(data, secretKey));
                navigate('/admin-cabinet');
            } else {
                formik.setFieldError(
                    'username',
                    "Noto'g'ri username yoki parol!"
                );
                formik.setFieldError(
                    'password',
                    "Noto'g'ri username yoki parol!"
                );
            }
        },
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="w-full flex flex-1 justify-center items-center dark:bg-gray-900 p-4 transition">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white dark:bg-gray-800 shadow-md rounded-md w-full max-w-md p-6 flex flex-col gap-4"
            >
                <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
                    Admin Kirish
                </h1>

                {/* Username */}
                <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Username:
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`mt-1 w-full border bg-white dark:bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2
                            ${
                                formik.touched.username &&
                                formik.errors.username
                                    ? 'border-error focus:ring-error'
                                    : 'border-gray-300 dark:border-gray-600 focus:ring-blue-400'
                            }
                        `}
                    />
                    {formik.touched.username && formik.errors.username && (
                        <p className="text-error text-sm mt-1">
                            {formik.errors.username}
                        </p>
                    )}
                </div>

                {/* Password */}
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

            {/* Modalni ochish */}
            {isModalOpen && (
                <Modal
                    content="Muvaffaqiyatli kirishingiz mumkin!"
                    onClose={closeModal}
                    onRedirect={redirectToDashboard}
                />
            )}
        </div>
    );
};

export default AdminLogin;
