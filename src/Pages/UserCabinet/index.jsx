import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AnimatedText } from './styled';

const UserCabinet = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isApelyatsya = location.state?.isApelyatsya || false;

    const [isSended, setIsSended] = useState(false); // Back-enddan olinadi

    // Validation Schema
    const validationSchema = Yup.object({
        file1: Yup.mixed().required('1-faylni tanlash majburiy'),
        file2: Yup.mixed().required('2-faylni tanlash majburiy'),
        file3: Yup.mixed().required('3-faylni tanlash majburiy'),
    });

    // Formik Setup
    const formik = useFormik({
        initialValues: {
            file1: null,
            file2: null,
            file3: null,
        },
        validationSchema,
        onSubmit: (values) => {
            if (isApelyatsya) {
                console.log('Fayllar:', values);
                alert("Ariza muvaffaqiyatli jo'natildi!");
                navigate('/user-cabinet', { replace: true, state: null });
            } else {
                console.log('Fayllar:', values);
                alert("Ariza muvaffaqiyatli jo'natildi!");
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

                    {/* File Inputs */}
                    {['file1', 'file2', 'file3'].map((file, index) => (
                        <div className="mb-4" key={index}>
                            <label
                                htmlFor={file}
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                Fayl {index + 1}
                            </label>
                            <input
                                id={file}
                                name={file}
                                type="file"
                                className="file-input file-input-bordered w-full mt-1"
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        file,
                                        event.currentTarget.files[0]
                                    )
                                }
                            />
                            {formik.touched[file] && formik.errors[file] && (
                                <p className="text-red-600 text-sm mt-1">
                                    {formik.errors[file]}
                                </p>
                            )}
                        </div>
                    ))}

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
                <AnimatedText>Ariza muvofiqiyatli jo'natilgan!</AnimatedText>
            )}
        </div>
    );
};

export default UserCabinet;
