import React from "react";
import { Link } from "react-router";
import Logo from "../../assets/icons/logo.png";

const Footer = () => {
    return (
        <div className="w-full h-[200px] flex justify-center bg-gray-500 p-2">
            <footer className="w-full lg:max-w-5xl md:max-w-3xl xl:max-w-[1150px] 2xl:max-w-[1400px] flex justify-around items-start ">
                <div className="w-[30%] flex flex-col gap-2 p-2">
                    <Link className="flex items-center gap-2 sm:gap-4" to="/">
                        <div className="w-[40px!important] h-[40px!important] sm:w-[60px!important] sm:h-[60px!important]">
                            <img
                                className="w-full h-full"
                                src={Logo}
                                alt="Logo"
                            />
                        </div>
                        <p className="max-w-[80px] font-semibold text-white italic text-[12px] leading-4 sm:max-w-[150px] sm:leading-5 sm:text-[22px]">
                            Qo'qon davlat universiteti
                        </p>
                    </Link>
                    <p className="font-semibold text-white">
                        Qo'qon davlat pedagogika instituti 1931-yil yanvar oyida
                        kechki pedagogika instituti sifatida tashkil etilgan.
                        Institut 1939-1940 o'quv yilidan boshlab kunduzgi davlat
                        o'qituvchilar institutiga aylantirilgan.
                    </p>
                </div>
                <div className="w-[30%] p-2 text-white font-semibold">
                    <h1 className="text-[12px] sm:text-[22px]">Manzil va bog'lanish</h1>
                    <p>Qo'qon shahar, Turon ko'chasi, 23-uy</p>
                    <p>kspi_info@edu.uz</p>
                    <a href="https://info.kspi.uz">info.kspi.uz</a>
                    <p>Ishonch telefoni: +998 73 249 38 38</p>
                </div>
                <div className="w-[30%] p-2 text-white">Section 1</div>
            </footer>
        </div>
    );
};

export default Footer;
