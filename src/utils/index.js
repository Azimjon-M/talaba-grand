import Home from '../Pages/Home';
import Service from '../Pages/Service';
import LoginUser from '../Pages/LoginUser';
import SignIn from '../Pages/SignIn';
import LoginAdmins from '../Pages/LoginAdmins';
import AdminCabinet from '../Pages/AdminCabinet';
import UserCabinet from '../Pages/UserCabinet';
import UserArizlarim from '../Pages/UserArizalarim/';
import UserProfil from '../Pages/UserProfil';

const routes = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        //   icon: ,
        element: Home,
        role: null,
    },
    {
        id: 2,
        title: 'Service',
        path: '/service',
        //   icon: ,
        element: Service,
        role: null,
    },
    {
        id: 3,
        title: 'LoginUser',
        path: '/login-user',
        //   icon: ,
        element: LoginUser,
        role: null,
    },
    {
        id: 4,
        title: 'SignInUser',
        path: '/signin-user',
        //   icon: ,
        element: SignIn,
        role: null,
    },
    {
        id: 5,
        title: 'LoginAdmin',
        path: '/login-admin',
        //   icon: ,
        element: LoginAdmins,
        role: null,
    },
    {
        id: 6,
        title: 'AdminCabinet',
        path: '/admin-cabinet',
        //   icon: ,
        element: AdminCabinet,
        role: ['admin'],
    },
    // Arizlalr jo'natish va foydalanuvchi kabineti
    {
        id: 7,
        title: 'UserCabinet',
        path: '/user-cabinet',
        //   icon: ,
        element: UserCabinet,
        role: ['user'],
    },
    {
        id: 8,
        title: 'UserCabinetArizalarim',
        path: '/user-arizlarim',
        //   icon: ,
        element: UserArizlarim,
        role: ['user'],
    },
    {
        id: 9,
        title: 'UserCabinetProfil',
        path: '/user-profil',
        //   icon: ,
        element: UserProfil,
        role: ['user'],
    },
];

export default routes;
