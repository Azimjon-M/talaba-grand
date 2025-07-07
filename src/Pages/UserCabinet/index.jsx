import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AnimatedText } from './styled';

const UserCabinet = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isApelyatsya = location.state?.isApelyatsya || false;

    const isTopForGPA = true;

    const [isSended, setIsSended] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    // Formik Setup
    const formik = useFormik({
        initialValues: {
            file1: null,
            file2: null,
            file3: null,
            file4: null,
            file5: null,
            file6: null,
            file7: null,
            file8: null,
        },
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
        <div className="flex flex-1 items-center justify-center bg-gray-100 dark:bg-gray-900">
            {!isSended ? (
                <form
                    onSubmit={formik.handleSubmit}
                    className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-full md:max-w-[600px] md:my-4 xl:max-w-[800px] xl:my-8"
                >
                    <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                        {isApelyatsya
                            ? "Apelyatsiya Arizasini Jo'natish"
                            : "Ariza Jo'natish"}
                    </h1>

                    {/* Akademik */}
                    <div>
                        <h1 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            Akademik
                        </h1>
                        <div>
                            <p>
                                <b>GPA balingiz: </b>4
                            </p>
                            <p>
                                <b>Akademik balingiz: </b>43
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-3 border-gray-300 dark:border-gray-600" />

                    {/* Ma'naviyat */}
                    <div className="mb-6">
                        <h1 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                            Ma'naviyat
                        </h1>
                        <div className="mb-4">
                            <label
                                htmlFor="file1"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                5 muhim tashabbus doirasidagi to'garaklarda faol
                                ishtiroki
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
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="file2"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                Talabaning OTM ichki tartib qoidalari va
                                Odob-axloq kodeksiga rioya etishi
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
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="file3"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                Xalqaro, Respublika, viloyat miqyosdagi
                                ko'rik-tanlov, fan olimpiadalari va sport
                                musobaqalarida erishgan natijalari
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
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="file4"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                Talabalarning “Ma'rifat darsi” dagi faol
                                ishtiroki
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
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="file5"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                Volontyorlik va jamoat ishlaridagi faolligi
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
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="file6"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                Teatr va muzey, xiyobon, kino, tarixiy
                                qadamjolarga tashriflar
                            </label>
                            <input
                                id="file6"
                                name="file6"
                                type="file"
                                className="file-input file-input-bordered w-full mt-1"
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        'file6',
                                        event.currentTarget.files[0]
                                    )
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="file7"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                Talabaning sport bilan shug'ullanishi va sog'lom
                                turmush tarziga amal qilishi
                            </label>
                            <input
                                id="file7"
                                name="file7"
                                type="file"
                                className="file-input file-input-bordered w-full mt-1"
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        'file7',
                                        event.currentTarget.files[0]
                                    )
                                }
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="file8"
                                className="block text-gray-700 dark:text-gray-300 font-medium"
                            >
                                Ma'naviyma'rifiy sohaga oid boshqa
                                yo'nalishlardagi faolligi uchun
                            </label>
                            <input
                                id="file8"
                                name="file8"
                                type="file"
                                className="file-input file-input-bordered w-full mt-1"
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        'file8',
                                        event.currentTarget.files[0]
                                    )
                                }
                            />
                        </div>
                    </div>

                    {isTopForGPA && (
                        <div>
                            {/* Divider */}
                            <hr className="my-6 border-gray-300 dark:border-gray-600" />
                            {/* Qo'shimcha grand */}
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="additionalGrantCheckbox"
                                    className="text-gray-800 dark:text-gray-300 font-medium"
                                >
                                    Qo'shimcha grand olishni istaysizmi?
                                </label>
                                <input
                                    type="checkbox"
                                    id="additionalGrantCheckbox"
                                    checked={isChecked}
                                    onChange={(e) =>
                                        setIsChecked(e.target.checked)
                                    }
                                    className="checkbox checkbox-success"
                                />
                            </div>

                            {/* Accordion */}
                            <div
                                className={`transition-max-height duration-500 overflow-hidden ${
                                    isChecked ? 'max-h-[500px] mt-4' : 'max-h-0'
                                }`}
                            >
                                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
                                    <p className="text-gray-800 dark:text-gray-300">
                                        GPA ko'rsatkichi 4 va unday yuqori
                                        bo'lgan, Ijtimoiy ximoya hamda Oliy
                                        ta'lim, fan va innovatsyalar vazirligi
                                        tomonidan berilgan toifadagi talabalar
                                        uchun qo'shimcha grand taqdim etiladi.
                                    </p>
                                    <div>
                                        <label
                                            htmlFor="file9"
                                            className="block text-gray-800 dark:text-gray-300 font-medium"
                                        >
                                            Toifa hujjatini yuklash:
                                        </label>
                                        <input
                                            id="file9"
                                            name="file9"
                                            type="file"
                                            className="file-input file-input-bordered w-full mt-1"
                                            onChange={(event) =>
                                                formik.setFieldValue(
                                                    'file9',
                                                    event.currentTarget.files[0]
                                                )
                                            }
                                        />
                                    </div>
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
