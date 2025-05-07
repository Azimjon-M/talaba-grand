import { Link } from "react-router";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/icons/logo.png";
import service from "../../assets/icons/service.png";
import admin from "../../assets/icons/admin.png";

const Navbar = () => {
    const [value, setValue] = useState(false);
    const [timer, setTimer] = useState(null);
    const divRef = useRef(null);

    // 3 soniya bosish boshlanganda
    const handlePressStart = () => {
        const newTimer = setTimeout(() => {
            setValue(true);
        }, 2000);
        setTimer(newTimer);
    };

    // Bosish tugaganda
    const handlePressEnd = () => {
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
    };

    // Tashqarida bosilganda value = false qilish
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setValue(false);
                if (timer) {
                    clearTimeout(timer);
                    setTimer(null);
                }
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("touchstart", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("touchstart", handleOutsideClick);
        };
    }, [timer]);

    return (
        <div className="relative flex justify-center bg-gray-600 p-2 sm:px-4 md:px-6 select-none overflow-hidden">
            <div
                ref={divRef}
                onMouseDown={handlePressStart}
                onMouseUp={handlePressEnd}
                onMouseLeave={handlePressEnd}
                onTouchStart={handlePressStart}
                onTouchEnd={handlePressEnd}
                className={`w-[100px] h-[50px] absolute z-30 top-0 left-[50%] translate-x-[-50%] cursor-pointer transition-all ${
                    !value ? "translate-y-[-50px]" : "translate-y-[0]"
                }`}
            >
                {/* Asosiy kvadrat div */}
                <div className="w-[100px] h-[50px] flex justify-center items-center bg-[#00fff2]">
                    <Link
                        className="btn btn-neutral btn-sm sm:btn-md p-[3px]"
                        to="/login-admin"
                    >
                        <img
                            className="w-full h-full"
                            src={admin}
                            alt="admin"
                        />
                    </Link>
                </div>
                {/* Past tomoniga yopishtirilgan shakl */}
                <div
                    className="w-[100px] h-[7px] bg-[#00fff2] absolute top-[50px] left-0"
                    style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)",
                    }}
                />
            </div>

            <div className=" flex justify-between items-center w-full lg:max-w-5xl md:max-w-3xl xl:max-w-[1150px] 2xl:max-w-[1400px] ">
                <Link className="flex items-center gap-2 sm:gap-4" to="/">
                    <div className="w-[40px!important] h-[40px!important] sm:w-[60px!important] sm:h-[60px!important]">
                        <img className="w-full h-full" src={Logo} alt="Logo" />
                    </div>
                    <p className="max-w-[80px] font-semibold text-white italic text-[12px] leading-4 sm:max-w-[150px] sm:leading-5 sm:text-[22px]">
                        Qo'qon davlat universiteti
                    </p>
                </Link>
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link
                        className="btn btn-info btn-sm sm:btn-md p-[3px]"
                        to="/service"
                    >
                        <img
                            className="w-full h-full"
                            src={service}
                            alt="service"
                        />
                    </Link>
                    <Link
                        className="btn btn-accent btn-sm sm:btn-md p-[3px] sm:p-4"
                        to="/login-user"
                    >
                        Ro'yxatdan o'tish
                    </Link>
                </div>
            </div>
            <div className="w-[100px] h-[7px] rounded-[5px,10px,15px,20px] absolute bottom-0 left-[50%] translate-x-[-50%] bg-[#00fff2] [clip-path:polygon(10%_0%,90%_0%,100%_100%,0%_100%)] z-30" />
        </div>
    );
};

export default Navbar;
