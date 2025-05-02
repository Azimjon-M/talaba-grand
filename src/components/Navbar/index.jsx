import { Link } from "react-router";
import React from "react";
import Logo from "../../assets/icons/logo.png";
import service from "../../assets/icons/service.png"
import admin from "../../assets/icons/admin.png"

const Navbar = () => {
    return (
        <div className="relative flex justify-center bg-gray-600 p-2">
            <div className="w-[100px] h-[5px] rounded-[5px,10px,15px,20px] absolute top-0 left-[50%] translate-x-[-50%] bg-[#00fff2] [clip-path:polygon(0%_0%,100%_0%,90%_100%,10%_100%)] z-30" />
            <div className="w-full flex justify-between items-center max-w-7xl">
                <Link className="flex items-center gap-4" to="/">
                    <span className="w-[60px] h-[60px]">
                        <img className="w-full h-full" src={Logo} alt="Logo" />
                    </span>
                    <p className="font-semibold text-white italic text-[22px]">
                        Qo'qon davlat unversiteti
                    </p>
                </Link>
                <div className="flex items-center gap-4">
                    <Link className="btn btn-neutral p-[3px]" to="/login-admin" >
                        <img className="w-full h-full" src={admin} alt="service" />
                    </Link>
                    <Link className="btn btn-info p-[3px]" to="service" >
                        <img className="w-full h-full" src={service} alt="service" />
                    </Link>
                    <Link className="btn btn-accent" to="/login-user" >
                        Ro'yxatdan o'tish
                    </Link>
                </div>
            </div>
            <div className="w-[100px] h-[5px] rounded-[5px,10px,15px,20px] absolute bottom-0 left-[50%] translate-x-[-50%] bg-[#00fff2] [clip-path:polygon(10%_0%,90%_0%,100%_100%,0%_100%)] z-30" />
        </div>
    );
};

export default Navbar;
