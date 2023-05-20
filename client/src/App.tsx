import ErrorBoundary from 'components/ErrorBoundary';
import CircularLoader from 'components/Spinners/CircularLoader';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from 'redux/app';
import router from './routes';

function App() {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Suspense fallback={<CircularLoader />}>
                    <ToastContainer position="top-center" />
                    <RouterProvider
                        router={router}
                        fallbackElement={<CircularLoader />}
                    />
                </Suspense>
            </ErrorBoundary>
        </Provider>
    );
}

export default App;
