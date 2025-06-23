import Home from '../Pages/Home';
import Service from '../Pages/Service';
import LoginUser from '../Pages/LoginUser';
import SignIn from '../Pages/SignIn';
import LoginAdmins from '../Pages/LoginAdmins';
import AdminCabinet from '../Pages/AdminCabinet';
import UserCabinet from '../Pages/UserCabinet';
import UserArizlarim from '../Pages/UserArizalarim/';
import SuperAdminCabinet from '../Pages/SuperAdminCabinet';
import UserProfil from '../Pages/UserProfil';

import { useId } from 'react';

const routes = [
    {
        id: useId,
        title: 'Home',
        path: '/',
        //   icon: ,
        element: Home,
        role: null,
    },
    {
        id: useId,
        title: 'Service',
        path: '/service',
        //   icon: ,
        element: Service,
        role: null,
    },
    {
        id: useId,
        title: 'LoginUser',
        path: '/login-user',
        //   icon: ,
        element: LoginUser,
        role: null,
    },
    {
        id: useId,
        title: 'SignInUser',
        path: '/signin-user',
        //   icon: ,
        element: SignIn,
        role: null,
    },
    {
        id: useId,
        title: 'LoginAdmin',
        path: '/login-admin',
        //   icon: ,
        element: LoginAdmins,
        role: null,
    },
    {
        id: useId,
        title: 'SuperAdminCabinet',
        path: '/superadmin-cabinet',
        //   icon: ,
        element: SuperAdminCabinet,
        role: ['superadmin'],
    },
    {
        id: useId,
        title: 'AdminCabinet',
        path: '/admin-cabinet',
        //   icon: ,
        element: AdminCabinet,
        role: ['admin'],
    },
    // Arizlalr jo'natish va foydalanuvchi kabineti
    {
        id: useId,
        title: 'UserCabinet',
        path: '/user-cabinet',
        //   icon: ,
        element: UserCabinet,
        role: ['user'],
    },
    {
        id: useId,
        title: 'UserCabinetArizalarim',
        path: '/user-arizlarim',
        //   icon: ,
        element: UserArizlarim,
        role: ['user'],
    },
    {
        id: useId,
        title: 'UserCabinetProfil',
        path: '/user-profil',
        //   icon: ,
        element: UserProfil,
        role: ['user'],
    },
];

export default routes;
