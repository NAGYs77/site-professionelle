import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


import logo from '../assets/logo.jpg'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "À Propos", path: "/a-propos" }, 
    { name: "Services", path: "/services" },
    { name: "Horaires", path: "/horaires" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO & NOM DU SITE */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-14 overflow-hidden rounded-xl border-2 border-brand-primary/10 shadow-sm transition-transform group-hover:scale-105 bg-yellow-400">
              <img 
                src={logo} 
                alt="Appelle-moi Logo" 
                className="h-full w-full object-cover"
                // On ajoute onError au cas où le fichier ne serait toujours pas trouvé
                onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Logo';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-brand-primary uppercase leading-none">
                Appelez-Moi
              </span>
              <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">
                Votre préstataire de service à Nosy-Be
              </span>
            </div>
          </Link>
          
          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 font-bold items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-slate-700 hover:text-brand-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-blue-800 transition shadow-md active:scale-95"
            >
              Contact
            </Link>
          </div>

          {/* BOUTON MOBILE */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-6 space-y-4 border-b font-bold flex flex-col animate-in fade-in slide-in-from-top-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-slate-800 border-b border-slate-50 pb-2 hover:text-brand-primary transition-colors"
            >
                {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="text-brand-primary text-lg font-black pt-2 flex items-center justify-between"
          >
            Contactez-nous
            <div className="bg-brand-primary/10 p-2 rounded-full">
                <Menu size={16} />
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;