import { Link } from 'react-router';
import { useState, useRef } from 'react';
import Logo from '../../assets/icons/QDUwhiteShadow.png';
import service from '../../assets/icons/service.png';
import admin from '../../assets/icons/admin.png';
import { Theme } from '../../styles/theme.js';
import { NavbarContainer } from './styled.js';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const { navbarBg } = Theme;
    const [value, setValue] = useState(false);
    const [timer, setTimer] = useState(null);
    const divRef = useRef(null);

    return (
        <NavbarContainer color={navbarBg}>
            {/* ADMIN TUGMASI */}
            <div
                ref={divRef}
                onMouseDown={() => {
                    const newTimer = setTimeout(() => setValue(true), 2000);
                    setTimer(newTimer);
                }}
                onMouseUp={() => timer && clearTimeout(timer)}
                onMouseLeave={() => timer && clearTimeout(timer)}
                onTouchStart={() => {
                    const newTimer = setTimeout(() => setValue(true), 2000);
                    setTimer(newTimer);
                }}
                onTouchEnd={() => timer && clearTimeout(timer)}
                className={`w-[100px] h-[50px] absolute z-30 top-0 left-[50%] translate-x-[-50%] cursor-pointer transition-all ${
                    !value ? 'translate-y-[-50px]' : 'translate-y-[0]'
                }`}
            >
                <div className="w-[100px] h-[50px] flex justify-center items-center bg-[#00D3BB] shadow-lg shadow-gray-700">
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
                <div
                    className="w-[100px] h-[7px] bg-[#00D3BB] absolute top-[50px] left-0"
                    style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)',
                    }}
                />
            </div>

            {/* NAVBAR */}
            <div className="flex justify-between items-center w-full lg:max-w-5xl md:max-w-3xl xl:max-w-[1150px] 2xl:max-w-[1400px] py-2 lg:py-4 2xl:py-6">
                <Link className="flex items-center gap-2 sm:gap-4" to="/">
                    <div className="w-[40px!important] h-[40px!important] sm:w-[60px!important] sm:h-[60px!important]">
                        <img className="w-full h-full" src={Logo} alt="Logo" />
                    </div>
                    <p className="max-w-[80px] font-semibold text-white text-shadow-lg/30 italic text-[12px] leading-4 sm:max-w-[150px] sm:leading-5 sm:text-[22px] ">
                        Qo'qon davlat universiteti
                    </p>
                </Link>

                {/* LIGHT/DARK MODE TOGGLER */}

                <div className="flex items-center gap-2 sm:gap-4">
                    <Link
                        className="btn btn-info btn-sm sm:btn-md p-[3px] shadow-md"
                        to="/service"
                    >
                        <img
                            className="w-full h-full"
                            src={service}
                            alt="service"
                        />
                    </Link>
                    <Link
                        className="btn btn-accent btn-sm sm:btn-md p-[3px] sm:p-4 shadow-md"
                        to="/login-user"
                    >
                        Kirish
                    </Link>
                    <Link
                        className="btn btn-accent btn-sm sm:btn-md p-[3px] sm:p-4 shadow-md"
                        to="/signin-user"
                    >
                        Ro'yxatdan o'tish
                    </Link>
                </div>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
