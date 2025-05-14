import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../../components/Modal";

const UserCabinet = () => {
    const navigate = useNavigate();

    // Hozircha JP bali statik
    const [jpBali, setJpBali] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const hasPrompted = useRef(false);

    const validationSchema = Yup.object({
        file: Yup.mixed()
            .required("Fayl majburiy")
            .test(
                "fileSize",
                "Fayl 5MB dan oshmasligi kerak",
                (value) => !value || (value && value.size <= 5 * 1024 * 1024)
            ),
        file2: Yup.mixed()
            .required("Fayl majburiy")
            .test(
                "fileSize",
                "Fayl 5MB dan oshmasligi kerak",
                (value) => !value || (value && value.size <= 5 * 1024 * 1024)
            ),
        file3: Yup.mixed()
            .required("Fayl majburiy")
            .test(
                "fileSize",
                "Fayl 5MB dan oshmasligi kerak",
                (value) => !value || (value && value.size <= 5 * 1024 * 1024)
            ),
    });

    const formik = useFormik({
        initialValues: {
            file: null,
            file2: null,
            file3: null,
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Ishladim");
            const formData = new FormData();
            formData.append("file1", values.file);
            formData.append("file2", values.file2);
            formData.append("file3", values.file3);

            console.log("Yuborilayotgan fayl:", values.file);
            alert("Fayl yuborildi!");
            // Get qilish kerak: jo'natilgan bo'lsa jarayonda qilish kerak.
            // Axios yoki fetch bilan yuborish bu yerda bo‘ladi
        },
    });

    const handleFileChange = (e) => {
        const { name, files } = e.currentTarget;
        formik.setFieldValue(name, files[0]);
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate("/"); // Asosiy sahifaga qaytish
    };

    // JP bali < 3.5 bo‘lsa modal ochiladi
    useEffect(() => {
        if (jpBali && jpBali <= 3.5) {
            setShowModal(true);
        }
    }, [jpBali]);

    useEffect(() => {
        if (!hasPrompted.current) {
            const res = Number(prompt("JP balingiz (bu test jarayoni uchun!)"));
            if (!isNaN(res)) {
                setJpBali(res);
            }
            hasPrompted.current = true;
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center px-4">
            {jpBali >= 3.5 && (
                <form
                    onSubmit={formik.handleSubmit}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                        Hujjat yuklash
                    </h2>

                    <div className="mb-4">
                        <label
                            htmlFor="file"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            1 Faylni tanlang:
                        </label>
                        <input
                            id="file"
                            name="file"
                            type="file"
                            onChange={handleFileChange}
                            className="file-input file-input-bordered w-full"
                        />
                        {formik.touched.file && formik.errors.file && (
                            <p className="text-red-500 text-sm mt-1">
                                {formik.errors.file}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="file"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            2 Faylni tanlang:
                        </label>
                        <input
                            id="file2"
                            name="file2"
                            type="file"
                            onChange={handleFileChange}
                            className="file-input file-input-bordered w-full"
                        />
                        {formik.touched.file2 && formik.errors.file2 && (
                            <p className="text-red-500 text-sm mt-1">
                                {formik.errors.file2}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="file"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            3 Faylni tanlang:
                        </label>
                        <input
                            id="file3"
                            name="file3"
                            type="file"
                            onChange={handleFileChange}
                            className="file-input file-input-bordered w-full"
                        />
                        {formik.touched.file3 && formik.errors.file3 && (
                            <p className="text-red-500 text-sm mt-1">
                                {formik.errors.file3}
                            </p>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Yuborish
                    </button>
                </form>
            )}

            {showModal && (
                <Modal
                    content={`Sizning JP balingiz ${jpBali}, bu 3.5 dan past. Siz qatnasha olmaysiz.`}
                    onClose={handleModalClose}
                    onRedirect={handleModalClose}
                />
            )}
        </div>
    );
};

export default UserCabinet;
