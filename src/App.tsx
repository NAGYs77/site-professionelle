import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Horaires from './components/Horaires';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      
      {/* Le contenu change ici selon l'URL */}
      <main>
     <Routes>
  <Route path="/" element={<Hero />} /> {/* Accueil avec seulement le Hero */}
  <Route path="/a-propos" element={<About />} /> {/* Page À Propos dédiée */}
  <Route path="/services" element={<Services />} />
  <Route path="/horaires" element={<Horaires />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;