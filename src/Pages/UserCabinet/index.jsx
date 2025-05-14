import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../../components/Modal";

const UserCabinet = () => {
  const navigate = useNavigate();

  // Hozircha JP bali statik
  const [jpBali, setJpBali] = useState(3.2);
  const [showModal, setShowModal] = useState(false);

  // JP bali < 3.5 bo‘lsa modal ochiladi
  useEffect(() => {
    if (jpBali <= 3.5) {
      setShowModal(true);
    }
  }, [jpBali]);

  const formik = useFormik({
    initialValues: {
      file: null,
    },
    validationSchema: Yup.object({
      file: Yup.mixed()
        .required("Fayl majburiy")
        .test(
          "fileSize",
          "Fayl 5MB dan oshmasligi kerak",
          value => !value || (value && value.size <= 5 * 1024 * 1024)
        ),
    }),
    onSubmit: values => {
      const formData = new FormData();
      formData.append("file", values.file);

      console.log("Yuborilayotgan fayl:", values.file);
      alert("Fayl yuborildi!");

      // Axios yoki fetch bilan yuborish bu yerda bo‘ladi
    },
  });

  const handleFileChange = e => {
    const file = e.currentTarget.files[0];
    formik.setFieldValue("file", file);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/"); // Asosiy sahifaga qaytish
  };

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
              Faylni tanlang:
            </label>
            <input
              id="file"
              name="file"
              type="file"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full"
            />
            {formik.touched.file && formik.errors.file && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.file}</p>
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
