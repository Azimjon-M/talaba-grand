import React from "react";
import serviseFon from "../../assets/fon/callCenter.png";

const Service = () => {
    return (
        <div className="h-[calc(100vh-276px)] flex justify-center sm:px-4 md:px-6">
            <div className="lg:max-w-5xl md:max-w-3xl xl:max-w-[1150px] 2xl:max-w-[1400px] relative max-w-7xl flex overflow-hidden " >
                <div className="w-full absolute left-[50%] translate-x-[-50%] -z-10">
                    <img className="w-full" src={serviseFon} alt="servise fon" />
                </div>
                <div className="w-[40%]" />
                <div className="w-[60%] h-full flex flex-col justify-center items-start">
                    <h1 className="text-[30px] font-medium">
                        <b>Qo'qon davlat unversiteti </b>
                        <br />
                        1- kurslarni grantga olish saytiga hush kelibsiz!
                    </h1>
                    <h2 className="text-[22px]">
                        Muammolar bo'yicha 
                        <b> Qo'qon davlat unversiteti </b> asosiy bino qoshida ochilgan IT
                        PARKga tashrif buyurishingiz mumkin
                    </h2>
                </div>

            </div>
        </div>
    );
};

export default Service;
