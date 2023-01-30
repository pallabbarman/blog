import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import Spinner from './components/Spinner';
import router from './Routes';

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <RouterProvider router={router} fallbackElement={<Spinner />} />
        </Suspense>
    );
}

export default App;
