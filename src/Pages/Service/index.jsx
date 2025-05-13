import React from "react";
import serviseFon from "../../assets/fon/callCenter.png";

const Service = () => {
    return (
        <div className="min-h-[calc(100vh-276px)] w-full flex justify-center bg-white">
            <div className="w-full max-w-7xl relative flex flex-col-reverse lg:flex-row items-center lg:items-stretch px-4 sm:px-6 lg:px-8 py-8 gap-6">

                {/* Matn qismi */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
                        <b>Qo'qon davlat universiteti</b><br />
                        1-kurslarni grantga olish saytiga hush kelibsiz!
                    </h1>
                    <h2 className="text-base sm:text-lg text-gray-700 font-medium">
                        Muammolar bo‘yicha
                        <b> Qo‘qon davlat universiteti </b> asosiy bino qoshida ochilgan
                        IT PARKga tashrif buyurishingiz mumkin.
                    </h2>
                </div>

                {/* Rasm qismi */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={serviseFon}
                        alt="Service background"
                        className="w-full h-auto max-h-[400px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Service;
