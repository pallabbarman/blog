import { Router } from 'express';
import authRoutes from './auth.route';
import blogRoutes from './blog.route';
import UserRoutes from './user.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: authRoutes,
    },
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/blogs',
        route: blogRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
