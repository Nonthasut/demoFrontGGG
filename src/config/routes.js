import RegisterPage from '../containers/pages/RegisterPage'
import LoginPage from '../containers/pages/LoginPage'
import TestLoginPage from '../containers/pages/TestLoginPage';


const components = {
    register: {
        url: '/register',
        page: RegisterPage
    },
    login: {
        url: '/login',
        page: LoginPage
    },
    testLogin:{
        url: '/testLogin',
        page: TestLoginPage
    }
};

export default {
    guest: {
        allowedRoutes: [
            components.register,
            components.login
        ],
        redirectRoutes:'/login'
    },
    user:{
        allowedRoutes:[
            components.testLogin
        ],
        redirectRoutes:'/testLogin'
    }
}