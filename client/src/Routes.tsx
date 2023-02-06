import loadable, { lazy } from '@loadable/component';
import { createBrowserRouter } from 'react-router-dom';

// layout
const Layout = loadable(() => import('./layout'));

// pages
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
