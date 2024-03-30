import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/waiters';

const Hero = lazy(() => import('components/sections/Hero.jsx'));
const About = lazy(() => import('components/sections/About.jsx'));
const Contact = lazy(() => import('components/sections/Contact.jsx'));
const Experience = lazy(() => import('components/sections/Experience.jsx'));
const Navbar = lazy(() => import('components/sections/Navbar.jsx'));
const Tech = lazy(() => import('components/sections/Tech.jsx'));
const Works = lazy(() => import('components/sections/Works.jsx'));
const StarsCanvas = lazy(() => import('components/canvas/Stars.jsx'));

const AppContent = () => {
    return (
        <BrowserRouter>
            <main className="relative z-0 bg-primary">
                <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <ErrorBoundary>
                        <Hero />
                    </ErrorBoundary>
                </section>

                <About />
                <Experience />
                <ErrorBoundary>
                    <Tech />
                </ErrorBoundary>
                <Works />

                <section className="relative z-0">
                    <ErrorBoundary>
                        <Contact />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <StarsCanvas />
                    </ErrorBoundary>
                </section>
            </main>
        </BrowserRouter>
    );
};

export default AppContent;
