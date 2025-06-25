import { Outlet } from 'react-router';
import Asidebar from '../../components/Asidebar';

const RootSuperAdmin = () => {
    return (
        <div className="flex min-h-screen">
            <Asidebar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default RootSuperAdmin;
