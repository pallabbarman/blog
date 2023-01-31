import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import Spinner from './components/Spinner';
import store from './redux/store';
import router from './Routes';

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<Spinner />}>
                <RouterProvider router={router} fallbackElement={<Spinner />} />
            </Suspense>
        </Provider>
    );
}

export default App;
