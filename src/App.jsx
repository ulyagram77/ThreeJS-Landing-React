import { Suspense, lazy } from 'react';
import { Preloader } from './components/waiters';

const AppContent = lazy(() => import('src/AppContent'));

const App = () => {
    return (
        <Suspense fallback={<Preloader />}>
            <AppContent />
        </Suspense>
    );
};

export default App;
