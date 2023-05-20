import ErrorBoundary from 'components/ErrorBoundary';
import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';

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
