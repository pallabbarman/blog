import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/Navbar';

function Layout() {
    return (
        <>
            <Navbar />
            <ErrorBoundary>
                <Outlet />
            </ErrorBoundary>
        </>
    );
}

export default Layout;
