import AdminHomePage from "../container/adminHomePage"
import TaskBoard from "../container/TaskBoard"
import LoginPage from '../container/loginPage'
import SignupPage from '../container/signupPage'

export const URL_API = "http://localhost:3000"

export const STATUS = [
    {
        value: 1,
        type: "READY"
    },
    {
        value: 2,
        type: "ON PROGRESS"
    },
    {
        value: 3,
        type: "COMPLETED"
    },
]

export const ROUTES = [
    {
        path: '/',
        name: 'Home Page',
        exact: true,
        component: AdminHomePage
    },
    {
        path: '/task-board',
        name: 'Managging Tasks Page',
        component: TaskBoard
    }
]

export const DEFAULT_ROUTES = [
    {
        path: '/login',
        name: 'Login Page',
        component: LoginPage
    },
    {
        path: '/signup',
        name: 'Sign up Page',
        component: SignupPage
    },
]

