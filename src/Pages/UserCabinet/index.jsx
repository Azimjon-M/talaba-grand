import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AnimatedText } from './styled';

const UserCabinet = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isApelyatsya = location.state?.isApelyatsya || false;

    const isTopForGPA = false;

    const [isSended, setIsSended] = useState(false);

    // Validation Schema
    const validationSchema = Yup.object({
        file1: Yup.mixed().required('1-faylni tanlash majburiy'),
        file2: Yup.mixed().required('2-faylni tanlash majburiy'),
        file3: Yup.mixed().required('3-faylni tanlash majburiy'),
        file4: Yup.mixed().required('4-faylni tanlash majburiy'),
        file5: Yup.mixed()
            .nullable()
            .test(
                'file5-required',
                '5-faylni tanlash majburiy',
                function (value) {
                    return !isTopForGPA || (isTopForGPA && value !== null);
                }
            ),
    });

    // Formik Setup
    const formik = useFormik({
        initialValues: {
            file1: null,
            file2: null,
            file3: null,
            file4: null,
            file5: null,
        },
        validationSchema,
        onSubmit: (values) => {
            // if (!isTopForGPA) {}    // !!!!!!!!!
            console.log('Fayllar:', values);
            alert("Ariza muvaffaqiyatli jo'natildi!");
            if (isApelyatsya) {
                navigate('/user-cabinet', { replace: true, state: null });
            } else {
                setIsSended(true);
            }
        },
    });

    return (
        <div className="flex flex-1 items-center justify-center bg-gray-100 dark:bg-gray-900 min-h-screen">
            {!isSended ? (
                <form
                    onSubmit={formik.handleSubmit}
                    className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-full max-w-md"
                >
                    <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                        {isApelyatsya
                            ? "Apelyatsiya Arizasini Jo'natish"
                            : "Ariza Jo'natish"}
                    </h1>

                    {/* Akademik */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                            Akademik
                        </h2>
                        <div className="mb-4">
                            <label
                                htmlFor="file1"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                Kitobxonligi
                            </label>
                            <input
                                id="file1"
                                name="file1"
                                type="file"
                                className="file-input file-input-bordered w-full mt-1"
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        'file1',
                                        event.currentTarget.files[0]
                                    )
                                }
                            />
                            {formik.touched.file1 && formik.errors.file1 && (
                                <p className="text-red-600 text-sm mt-1">
                                    {formik.errors.file1}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="file2"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                2-Fayl
                            </label>
                            <input
                                id="file2"
                                name="file2"
                                type="file"
                                className="file-input file-input-bordered w-full mt-1"
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        'file2',
                                        event.currentTarget.files[0]
                                    )
                                }
                            />
                            {formik.touched.file2 && formik.errors.file2 && (
                                <p className="text-red-600 text-sm mt-1">
                                    {formik.errors.file2}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-6 border-gray-300 dark:border-gray-600" />

                    {/* Ma'naviyat */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                            Ma'naviyat
                        </h2>
                        <div className="mb-4">
                            <label
                                htmlFor="file3"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                3-Fayl
                            </label>
                            <input
                                id="file3"
                                name="file3"
                                type="file"
                                className="file-input file-input-bordered w-full mt-1"
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        'file3',
                                        event.currentTarget.files[0]
                                    )
                                }
                            />
                            {formik.touched.file3 && formik.errors.file3 && (
                                <p className="text-red-600 text-sm mt-1">
                                    {formik.errors.file3}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="file4"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                4-Fayl
                            </label>
                            <input
                                id="file4"
                                name="file4"
                                type="file"
                                className="file-input file-input-bordered w-full mt-1"
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        'file4',
                                        event.currentTarget.files[0]
                                    )
                                }
                            />
                            {formik.touched.file4 && formik.errors.file4 && (
                                <p className="text-red-600 text-sm mt-1">
                                    {formik.errors.file4}
                                </p>
                            )}
                        </div>
                    </div>

                    {isTopForGPA && (
                        <div>
                            {/* Divider */}
                            <hr className="my-6 border-gray-300 dark:border-gray-600" />
                            {/* Qo'shimcha grand */}
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                                    Qo'shimcha grand
                                </h2>
                                <div className="mb-4">
                                    <label
                                        htmlFor="file5"
                                        className="block text-gray-700 dark:text-gray-300 font-medium"
                                    >
                                        5-Fayl
                                    </label>
                                    <input
                                        id="file5"
                                        name="file5"
                                        type="file"
                                        className="file-input file-input-bordered w-full mt-1"
                                        onChange={(event) =>
                                            formik.setFieldValue(
                                                'file5',
                                                event.currentTarget.files[0]
                                            )
                                        }
                                    />
                                    {formik.touched.file5 &&
                                        formik.errors.file5 && (
                                            <p className="text-red-600 text-sm mt-1">
                                                {formik.errors.file5}
                                            </p>
                                        )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                        disabled={formik.isSubmitting}
                    >
                        Jo'natish
                    </button>
                </form>
            ) : (
                <AnimatedText>Ariza muvaffaqiyatli jo'natilgan!</AnimatedText>
            )}
        </div>
    );
};

export default UserCabinet;
