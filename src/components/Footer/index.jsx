import { Link } from 'react-router';
import Logo from '../../assets/icons/logo.png';
import { Theme } from '../../styles/theme.js';
import { FooterContainer } from './styled.js';
import FonAnimated from '../FonAnimated/index.jsx';
import { FaTelegram, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import ItParkLOgo from '../../assets/icons/ItPark_Logo.png';

const Footer = () => {
    const { footerBgLeft, footerBgRight } = Theme;
    return (
        <FooterContainer
            className="w-full relative flex flex-col items-center"
            color={{ left: footerBgLeft, right: footerBgRight }}
        >
            <div className="">
                <footer className="flex flex-col md:flex-row justify-between items-start z-30 w-full lg:max-w-5xl md:max-w-3xl xl:max-w-[1150px] 2xl:max-w-[1400px] gap-6 py-3">
                    {/* Logo va Tavsif */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2">
                        <Link className="flex items-center gap-2" to="/">
                            <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]">
                                <img
                                    className="w-full h-full"
                                    src={Logo}
                                    alt="Logo"
                                />
                            </div>
                            <p className="font-semibold text-black dark:text-white italic text-sm sm:text-xl max-w-[150px] leading-snug">
                                Qo'qon davlat universiteti
                            </p>
                        </Link>
                        <p className="text-black dark:text-white text-sm sm:text-base">
                            Qo'qon davlat unversiteti 1931-yil yanvar oyida
                            kechki pedagogika instituti sifatida tashkil
                            etilgan. Institut 1939-1940 o'quv yilidan boshlab
                            kunduzgi davlat o'qituvchilar institutiga
                            aylantirilgan.
                        </p>
                    </div>

                    {/* Manzil */}
                    <div className="w-full md:w-1/3 text-black dark:text-white font-semibold">
                        <h1 className="text-sm sm:text-xl mb-1">
                            Manzil va bog'lanish
                        </h1>
                        <p className="text-sm">
                            Qo'qon shahar, Turon ko'chasi, 23-uy
                        </p>
                        <p className="text-sm">kspi_info@edu.uz</p>
                        <a
                            href="https://kokandsu.uz/"
                            target="_blank"
                            className="text-sm underline"
                        >
                            kokandsu.uz
                        </a>
                        <p className="text-sm">
                            Ishonch telefoni: +998 00 000 00 00
                        </p>
                    </div>
                    {/*  Ijtimoiy tarmoqlar */}
                    <div className="w-full md:w-1/3 text-black dark:text-white">
                        <h1 className="text-sm sm:text-xl font-semibold mb-2">
                            Ijtimoiy tarmoqlar
                        </h1>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center space-x-2">
                                <a
                                    href="https://t.me/username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 hover:text-blue-500 dark:hover:text-blue-400"
                                >
                                    <FaTelegram className="text-xl" />
                                    <span>Telegram</span>
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <a
                                    href="https://instagram.com/username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 hover:text-pink-500 dark:hover:text-pink-400"
                                >
                                    <FaInstagram className="text-xl" />
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <a
                                    href="https://youtube.com/username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 hover:text-red-500 dark:hover:text-red-400"
                                >
                                    <FaYoutube className="text-xl" />
                                    <span>YouTube</span>
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <a
                                    href="https://facebook.com/username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 hover:text-blue-700 dark:hover:text-blue-600"
                                >
                                    <FaFacebook className="text-xl" />
                                    <span>Facebook</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <FonAnimated />
            </div>
            <div className="divider m-0" />

            <div className="my-4">
                <h1>
                    Copyright © 2025 Qo'qon davlat universiteti,{' '}
                    <img
                        className="w-[26px] inline-block bg-[#ffffffc1] rounded-sm p-[1px] mx-[2px]"
                        src={ItParkLOgo}
                        alt="It Park"
                    />{' '}
                    It Park. Barcha huquqlar himoyalangan.
                </h1>
            </div>
        </FooterContainer>
    );
};

export default Footer;
