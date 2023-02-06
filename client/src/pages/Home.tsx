import { lazy } from '@loadable/component';

const Blogs = lazy(() => import('../components/Blogs'));

function Home() {
    return <Blogs />;
}

export default Home;
