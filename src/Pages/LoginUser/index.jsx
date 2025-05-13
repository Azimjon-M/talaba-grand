import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

const LoginUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal ochish uchun state
    const closeModal = () => {
        setIsModalOpen(false); // Modalni yopish
    };

    const redirectToLogin = () => {
        navigate("/login-user"); // Kirish sahifasiga yo'naltirish
    };


    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        hemsId: Yup.string()
            .matches(/^\d{14}$/, "Hems ID 14 ta raqamdan iborat bo'lishi shart!")
            .required("Hems ID kiritilishi shart!"),
        password: Yup.string()
            .matches(
                /^[a-zA-Z0-9]+$/,
                "Parol A-Z, a-z, 0-9 belgilari qatnashgan bo'lishi kerak!"
            )
            .required("Parol kiritilishi shart!"),
    });

    const formik = useFormik({
        initialValues: {
            hemsId: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            // Kirish logikasi bu yerda bo'ladi
            console.log("Kirish ma'lumotlari:", values);
            // navigate("/cabinet"); // Foydalanuvchini shaxsiy kabinetga yo‘naltirish
            resetForm();
            setIsModalOpen(true);
        },
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="w-full min-h-[calc(100vh-150px)] flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-4 transition">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white dark:bg-gray-800 shadow-md rounded-md w-full max-w-md p-6 flex flex-col gap-4"
            >
                <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
                    Kirish
                </h1>

                {/* HEMS ID */}
                <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        HEMS ID:
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
                                    ? "border-error focus:ring-error"
                                    : "border-gray-300 dark:border-gray-600 focus:ring-blue-400"
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
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`mt-1 w-full border bg-white dark:bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2
                            ${
                                formik.touched.password && formik.errors.password
                                    ? "border-error focus:ring-error"
                                    : "border-gray-300 dark:border-gray-600 focus:ring-blue-400"
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
        </div>
    );
};

export default LoginUser;
