import { Outlet } from 'react-router';
import NavbarUser from '../components/NavbarUser';

const RootUser = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavbarUser />
            <Outlet />
        </div>
    );
};

export default RootUser;
