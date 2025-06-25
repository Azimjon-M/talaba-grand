import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineSetting,
    AiOutlineMenu,
} from 'react-icons/ai';
import { LuArrowLeftToLine } from 'react-icons/lu';

const Asidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Breakpoint lg: default holatni o'rnatish
    useEffect(() => {
        const handleResize = () => {
            setIsExpanded(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    };

    const menuItems = [
        { name: 'Bosh sahifa', icon: <AiOutlineHome />, path: '/' },
        { name: 'Foydalanuvchilar', icon: <AiOutlineUser />, path: '/users' },
        { name: 'Sozlamalar', icon: <AiOutlineSetting />, path: '/settings' },
    ];

    return (
        <div className="flex">
            {/* Asidebar */}
            <aside
                className={`flex flex-col bg-gray-800 text-white transition-all duration-300 ${
                    isExpanded ? 'w-64' : 'w-16'
                } h-screen`}
            >
                {/* Toggle Button */}
                <div
                    className={`flex items-center p-2 ${
                        isExpanded ? 'justify-end' : 'justify-center'
                    }`}
                >
                    <button
                        onClick={toggleSidebar}
                        className="text-xl p-2 bg-gray-700 rounded-md hover:bg-gray-600"
                    >
                        {isExpanded ? <LuArrowLeftToLine /> : <AiOutlineMenu />}
                    </button>
                </div>

                {/* Menu Items */}
                <nav
                    className={`flex flex-col  mt-4 ${
                        isExpanded ? 'items-start' : 'items-center'
                    }`}
                >
                    {menuItems.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) =>
                                `flex items-center gap-4 p-2 my-2 rounded-md border border-[red] ${
                                    isActive
                                        ? 'bg-gray-600'
                                        : 'hover:bg-gray-700'
                                }`
                            }
                        >
                            <span className="text-2xl">{item.icon}</span>
                            {isExpanded && (
                                <span className="text-lg">{item.name}</span>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </div>
    );
};

export default Asidebar;
