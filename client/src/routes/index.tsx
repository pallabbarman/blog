import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Layout = lazy(() => import('../layout'));
const Home = lazy(() => import('../pages/Home'));
const Blog = lazy(() => import('../pages/Blog'));
const NotFound = lazy(() => import('../pages/NotFound'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
