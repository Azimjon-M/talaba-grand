import { useEffect, useRef, useState } from "react";
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
        onSubmit: (values, { resetForm }) => {
            console.log("Ishladim");
            const formData = new FormData();
            formData.append("file1", values.file);
            formData.append("file2", values.file2);
            formData.append("file3", values.file3);

            console.log("Yuborilayotgan fayl:", values.file);
            alert("Fayl yuborildi!");
            resetForm();
            // Get qilish kerak: jo'natilgan bo'lsa jarayonda qilish
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
            <div className="w-full lg:max-w-5xl md:max-w-3xl xl:max-w-[1150px] 2xl:max-w-[1400px] p-2 relative ">
                {jpBali >= 3.5 && (
                    <form
                        onSubmit={formik.handleSubmit}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                            Hujjat yuklash
                        </h2>

                        {/* Fayl 1 */}
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

                        {/* Fayl 2 */}
                        <div className="mb-4">
                            <label
                                htmlFor="file2"
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

                        {/* Fayl 3 */}
                        <div className="mb-4">
                            <label
                                htmlFor="file3"
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

                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Yuborish
                        </button>
                    </form>
                )}
            </div>
            {/* Asosiy sahifaga qaytish tugmasi */}
            <button
                onClick={() => navigate("/")}
                className="btn btn-info fixed right-4 bottom-4 md:absolute md:right-0 md:bottom-0 m-2 md:m-8 lg:m-12 xl:m-20"
            >
                Asosiy sahifaga qaytish
            </button>

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
