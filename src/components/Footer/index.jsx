import { Link } from "react-router";
import Logo from "../../assets/icons/logo.png";

const Footer = () => {
    return (
        <div className="relative flex justify-center bg-gray-500 p-4 sm:px-4 md:px-6">
            <footer className="flex flex-col md:flex-row justify-between items-start w-full lg:max-w-5xl md:max-w-3xl xl:max-w-[1150px] 2xl:max-w-[1400px] gap-6">
                {/* Logo va Tavsif */}
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <Link className="flex items-center gap-2" to="/">
                        <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]">
                            <img className="w-full h-full" src={Logo} alt="Logo" />
                        </div>
                        <p className="font-semibold text-white italic text-sm sm:text-xl max-w-[150px] leading-snug">
                            Qo'qon davlat universiteti
                        </p>
                    </Link>
                    <p className="text-white text-sm sm:text-base">
                        Qo'qon davlat pedagogika instituti 1931-yil yanvar oyida kechki
                        pedagogika instituti sifatida tashkil etilgan. Institut 1939-1940
                        o'quv yilidan boshlab kunduzgi davlat o'qituvchilar institutiga
                        aylantirilgan.
                    </p>
                </div>

                {/* Manzil */}
                <div className="w-full md:w-1/3 text-white font-semibold">
                    <h1 className="text-sm sm:text-xl mb-1">Manzil va bog'lanish</h1>
                    <p className="text-sm">Qo'qon shahar, Turon ko'chasi, 23-uy</p>
                    <p className="text-sm">kspi_info@edu.uz</p>
                    <a href="https://info.kspi.uz" className="text-sm underline">
                        info.kspi.uz
                    </a>
                    <p className="text-sm">Ishonch telefoni: +998 73 249 38 38</p>
                </div>

                {/* Bo'sh Section yoki qo‘shimcha content */}
                <div className="w-full md:w-1/3 text-white">
                    <h1 className="text-sm sm:text-xl font-semibold mb-1">Bo‘lim 1</h1>
                    <ul className="text-sm space-y-1">
                        <li><Link to="/service">Xizmatlar</Link></li>
                        <li><Link to="/about">Biz haqimizda</Link></li>
                        <li><Link to="/contact">Aloqa</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
