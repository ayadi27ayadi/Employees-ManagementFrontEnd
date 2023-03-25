import Accueil from "../pages/Accueil/Accueil";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import Login from "../pages/Login/Login";
import ResetPassword from "../pages/ResetPassword/ResetPassword";

const routes = [

    {
        element :Accueil,
        path: '/accueil',
        linkText: 'Accueil',
        routeKey: 'accueil'
    },
    {
        element :Login,
        path: '/',
        linkText: 'Login',
        routeKey: 'login'
    }, 
    {
        element :ForgetPassword,
        path: '/forget-password',
        linkText: 'ForgetPassword',
        routeKey: 'forgetPassword'
    },
    {
        element :ResetPassword,
        path: '/confirm/:userId/:token',
        linkText: 'ResetPassword',
        routeKey: 'resetPassword'
    },
]
export default routes