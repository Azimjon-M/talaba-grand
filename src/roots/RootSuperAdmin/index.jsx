import { Outlet } from 'react-router';

const RootSuperAdmin = () => {
    return (
        <div className="flex min-h-screen">
            <div>Aside Bar</div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default RootSuperAdmin;
