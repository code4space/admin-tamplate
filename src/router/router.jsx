import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home'
import Navbar from '../components/navBar'
import LoginPage from '../pages/loginPage'
import RegisterPage from '../pages/registerPage'
import HistoryPage from '../pages/history'
import GrowthPage from '../pages/growth'
import DeskPage from '../pages/desk'

const router = createBrowserRouter([
    {
        element: <Navbar />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/desk",
                element: <DeskPage />
            },
            {
                path: "/growth",
                element: <GrowthPage />
            },
            {
                path: "/history",
                element: <HistoryPage />
            },
        ]
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
])

export default router