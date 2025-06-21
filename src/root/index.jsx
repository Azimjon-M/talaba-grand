import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import 'swiper/css';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
