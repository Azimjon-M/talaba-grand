import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/icons/logo.png'; // Logo rasm manzili

const NavbarUser = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const handleClickOut = () => {
        const res = confirm('Tizimdan chiqmoqchimisiz?');
        if (res) {
            localStorage.removeItem('user_data'); // Foydalanuvchini tizimdan chiqarish sm
            navigate('/');
        }
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-gradient-to-r dark:from-black dark:to-gray-600 from-gray-400 to-white dark:bg-gray-800 shadow-md py-3 px-4 sm:px-6">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo va Yozuv */}
                <NavLink
                    to="/user-cabinet"
                    className="flex items-center text-xl font-bold text-gray-800 dark:text-white space-x-2"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14"
                    />
                    <span className="md:hidden">QDU</span>
                    <span className="hidden md:block">
                        Qo'qon Davlat Universiteti
                    </span>
                </NavLink>

                {/* Navigation Links */}
                <div className="flex items-center space-x-4 sm:space-x-6">
                    <NavLink
                        to="/user-cabinet"
                        className={({ isActive }) =>
                            `text-sm sm:text-base font-medium hover:text-blue-500 dark:hover:text-blue-400 ${
                                isActive
                                    ? 'border-b-2 border-blue-500'
                                    : 'text-gray-800 dark:text-gray-300 '
                            }`
                        }
                    >
                        Arizala Jo'natish
                    </NavLink>
                    <NavLink
                        to="/user-arizlarim"
                        className={({ isActive }) =>
                            `text-sm sm:text-base font-medium hover:text-blue-500 dark:hover:text-blue-400 ${
                                isActive
                                    ? 'border-b-2 border-blue-500'
                                    : 'text-gray-800 dark:text-gray-300 '
                            }`
                        }
                    >
                        Arizalarim
                    </NavLink>

                    {/* Profile Icon with Dropdown */}
                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none cursor-pointer"
                        >
                            <FaUserCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10" />
                        </button>

                        {menuOpen && (
                            <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-700 shadow-lg rounded-md w-44 py-2 z-10">
                                <NavLink
                                    to="/user-profil"
                                    className={({ isActive }) =>
                                        `block px-4 py-2 text-sm transition-all duration-200 hover:text-blue-500 hover:dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                                            isActive
                                                ? 'border-b-2 border-blue-500'
                                                : 'text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                                        }`
                                    }
                                >
                                    Profil
                                </NavLink>
                                <button
                                    className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200"
                                    onClick={handleClickOut}
                                >
                                    Chiqish
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarUser;
