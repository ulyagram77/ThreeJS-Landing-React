import { BrowserRouter } from 'react-router-dom';
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
} from 'components/sections';

import { ErrorBoundary } from './components/waiters';

const App = () => {
    return (
        <BrowserRouter>
            <main className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <ErrorBoundary>
                        <Hero />
                    </ErrorBoundary>
                </div>

                <About />
                <Experience />
                <ErrorBoundary>
                    <Tech />
                </ErrorBoundary>
                <Works />

                <div className="relative z-0">
                    <ErrorBoundary>
                        <Contact />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <StarsCanvas />
                    </ErrorBoundary>
                </div>
            </main>
        </BrowserRouter>
    );
};

export default App;
