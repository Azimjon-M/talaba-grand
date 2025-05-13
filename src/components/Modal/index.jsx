import React from "react";

const Modal = ({ content, onClose, onRedirect }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p-2 sm:p-0 ">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-[400px] md:w-[500px] ">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {content}
                </h2>
                <p className="text-md font-semibold text-gray-800 dark:text-white mb-5">
                    Davom etishni istaysimi?
                </p>
                <div className="flex justify-between">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md"
                    >
                        Yo'q
                    </button>
                    <button
                        onClick={onRedirect}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    >
                        Ha
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
