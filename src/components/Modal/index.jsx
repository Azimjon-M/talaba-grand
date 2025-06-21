import { FaTimes } from 'react-icons/fa';

const Modal = ({ content, isError = false, onClose, onRedirect }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p-2 sm:p-0">
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-[400px] md:w-[500px]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-800 dark:text-white hover:text-red-600 cursor-pointer"
                >
                    <FaTimes size={20} />
                </button>

                {/* Modal Content */}
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center space-x-2">
                    <p>
                        {content}
                        <b className="inline-block align-middle ms-1">
                            {isError && <FaTimes className="text-red-500" />}
                        </b>
                    </p>
                </h2>

                {/* Confirmation Text */}
                {!isError && (
                    <p className="text-md font-semibold text-gray-800 dark:text-white mb-5">
                        Davom etishni istaysimi?
                    </p>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={onClose} className="btn btn-error">
                        Yopish
                    </button>
                    <button
                        disabled={isError}
                        onClick={onRedirect}
                        className="btn btn-success"
                    >
                        Ha
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
