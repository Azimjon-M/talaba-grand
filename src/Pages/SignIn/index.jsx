import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import Modal from '../../components/Modal';
import { useNavigate } from 'react-router';

const SignIn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal ochish uchun state
    const isError = false; // from Backend
    const navigate = useNavigate();

    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });

    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });

    const generateCaptcha = () => {
        const newCaptcha = {
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10),
        };
        setCaptcha(newCaptcha);
    };

    const closeModal = () => {
        setIsModalOpen(false); // Modalni yopish
    };

    const redirectToLogin = () => {
        navigate('/login-user'); // Kirish sahifasiga yo'naltirish
    };

    // Arifmetik misol noto'g'ri yechildi
    const validationSchema = Yup.object({
        hemsId: Yup.string()
            .matches(/^\d{14}$/, 'Hemis Id 14 ta raqamdan iborat!')
            .required('Hemis Id 14 ta raqamdan iborat!'),
        password: Yup.string()
            .matches(
                /^[a-zA-Z0-9]+$/,
                "Parol A-Z, a-z, 0-9 belgilari qatnashgan bo'lishi shart!"
            )
            .required(
                "Parol A-Z, a-z, 0-9 belgilari qatnashgan bo'lishi shart!"
            ),
        confirmPassword: Yup.string()
            .oneOf(
                [Yup.ref('password')],
                'Birinchi paroliningiz bilan nomunosiblik aniqlandi!'
            )
            .required('Birinchi paroliningiz bilan moslik aniqlanmadi!'),
        captchaAnswer: Yup.string().required('Javobni kiriting!'),
    });

    // Formik setup
    const formik = useFormik({
        initialValues: {
            hemsId: '11111111111111', // 14 ta raqamdan iborat bo'lishi kerak
            password: 'Abc123',
            confirmPassword: 'Abc123',
            captchaAnswer: '',
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            const correctAnswer = Number(parseInt(values.captchaAnswer));
            const captchaResult = Number(captcha.num1 + captcha.num2);

            if (correctAnswer !== captchaResult) {
                formik.setFieldError('captchaAnswer', "Noto'g'ri javob!");
                return;
            }

            if (values.password !== values.confirmPassword) {
                formik.setFieldError('confirmPassword', 'Parollar mos emas!');
                return;
            }
            setIsModalOpen(true);
            generateCaptcha();
            resetForm();
        },
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    return (
        <div className="w-full flex-1 flex justify-center items-center transition">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-md w-full max-w-md p-6 flex flex-col gap-4"
            >
                <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
                    Ro'yxatdan o'tish
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

                    {/* Warning */}
                    <div className="flex items-center gap-1 mt-1 text-yellow-600 dark:text-yellow-400 text-sm">
                        ⚠️
                        <span>
                            HEMIS ID o'zingizga tegishli ekanligiga ishonch
                            hosil qiling!
                        </span>
                    </div>
                </div>

                {/* Password */}
                <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Parol:
                    </label>
                    <div className="relative flex items-center mt-1">
                        <input
                            type={showPassword.password ? 'text' : 'password'}
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="new-password" // Bu yerda atribut qo'shildi
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
                            onClick={() => togglePasswordVisibility('password')}
                            className="absolute right-3 hidden sm:block"
                        >
                            {showPassword.password ? (
                                <FaEyeSlash className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                            ) : (
                                <FaEye className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                    <div>
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-error text-sm mt-1">
                                {formik.errors.password}
                            </p>
                        )}
                    </div>
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Parolni tasdiqlash:
                    </label>
                    <div className="relative flex items-center mt-1">
                        <input
                            type={
                                showPassword.confirmPassword
                                    ? 'text'
                                    : 'password'
                            }
                            name="confirmPassword"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="new-password" // Bu yerda atribut qo'shildi
                            className={`mt-1 w-full border bg-white dark:bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2
                                ${
                                    formik.touched.confirmPassword &&
                                    formik.errors.confirmPassword
                                        ? 'border-error focus:ring-error'
                                        : 'border-gray-300 dark:border-gray-600 focus:ring-blue-400'
                                }
                            `}
                        />
                        <button
                            type="button"
                            onClick={() =>
                                togglePasswordVisibility('confirmPassword')
                            }
                            className="absolute right-3 hidden sm:block"
                        >
                            {showPassword.confirmPassword ? (
                                <FaEyeSlash className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                            ) : (
                                <FaEye className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                    <div>
                        {formik.touched.confirmPassword &&
                            formik.errors.confirmPassword && (
                                <p className="text-error text-sm mt-1">
                                    {formik.errors.confirmPassword}
                                </p>
                            )}
                    </div>
                </div>

                {/* Captcha */}
                <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {captcha.num1} + {captcha.num2} = ?
                    </label>
                    <input
                        type="number"
                        name="captchaAnswer"
                        value={formik.values.captchaAnswer}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`mt-1 w-full border bg-white dark:bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2
                                ${
                                    formik.touched.captchaAnswer &&
                                    formik.errors.captchaAnswer
                                        ? 'border-error focus:ring-error'
                                        : 'border-gray-300 dark:border-gray-600 focus:ring-blue-400'
                                }
                            `}
                    />
                    {formik.touched.captchaAnswer &&
                        formik.errors.captchaAnswer && (
                            <p className="text-error text-sm mt-1">
                                {formik.errors.captchaAnswer}
                            </p>
                        )}
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
                >
                    Ro'yxatdan o'tish
                </button>
            </form>
            {/* Modalni ochish */}
            {isModalOpen && (
                <Modal
                    isError={isError}
                    content={
                        isError
                            ? `HEMIS id yoki parolingiz hato!`
                            : `Muvaffaqiyatli ro'yxatdan o'tdingiz!`
                    }
                    onClose={closeModal}
                    onRedirect={redirectToLogin}
                />
            )}
        </div>
    );
};

export default SignIn;
