import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Events from './pages/Events';
import Contacts from './pages/Contacts';
import Booking from './pages/Booking';
import PageTransitionLoader from './components/PageTransitionLoader';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const startTime = performance.now();
    const handleLoad = () => {
      const endTime = performance.now();
      const elapsed = endTime - startTime;
      const minDuration = 800;
      const delay = Math.max(0, minDuration - elapsed);

      setTimeout(() => {
        const preloader = document.getElementById('initial-preloader');
        if (preloader) {
          preloader.classList.add('fade-out');
          // Wait for CSS transition (0.6s) then remove
          setTimeout(() => {
            if (preloader.parentNode) {
              preloader.parentNode.removeChild(preloader);
            }
          }, 600);
        }
      }, delay);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback in case load event already fired or takes too long (e.g., 3.5 seconds)
      const fallbackTimer = setTimeout(handleLoad, 3500);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <PageTransitionLoader />
      <div className="flex flex-col min-h-screen bg-brand-cream text-on-surface select-none">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
