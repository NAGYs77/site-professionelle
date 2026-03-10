import { Phone, Mail, MapPin, Settings } from 'lucide-react';
import fb from '../assets/fb.png';
import wa from '../assets/wa.png';
import insta from '../assets/insta.png';
import zone from '../assets/zone.jpeg';
import we from '../assets/we.jpeg';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION PARTENAIRES (CLIQUABLES) --- */}
        <div className="mb-10 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          
          {/* Partenaire : Meva Nosy */}
          <a 
            href="https://web.facebook.com/profile.php?id=61557979202815" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-4 hover:opacity-80 transition-all"
          >
            <div className="flex items-center gap-2 text-lg font-black italic tracking-tighter">
              <Settings size={20} className="text-brand-accent animate-spin-slow"/> 
              <span className="text-white group-hover:text-brand-accent transition-colors">Meva Nosy</span>
            </div>
            <img 
              src={we} 
              alt="Logo Meva Nosy" 
              className="h-12 w-auto object-contain rounded-lg shadow-lg border border-white/5" 
            />
          </a>
          
          {/* Séparateur discret en desktop */}
          <div className="hidden md:block h-8 w-[1px] bg-white/10"></div>

          {/* Partenaire : Zone Alpha */}
          <a 
            href="https://web.facebook.com/Zonealphastudio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-4 hover:opacity-80 transition-all"
          >
            <div className="flex items-center gap-2 text-lg font-black italic tracking-tighter">
              <Settings size={20} className="text-blue-500"/> 
              <span className="text-white group-hover:text-blue-400 transition-colors">Zone Alpha</span>
            </div>
            <img 
              src={zone} 
              alt="Logo Zone Alpha" 
              className="h-12 w-auto object-contain rounded-lg shadow-lg border border-white/5" 
            />
          </a>

        </div>

        {/* --- INFOS FOOTER --- */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-10 text-sm">
          
          {/* Brand & Social Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-primary p-1.5 rounded-lg text-white">
                <Phone size={18} />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter">Appelez-Moi</span>
            </div>

            <div className="flex gap-4 items-center">
              {/* Facebook Appelez-Moi */}
              <a 
                href="https://web.facebook.com/profile.php?id=61561177035592" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform bg-white/5 p-1 rounded-full"
              >
                <img src={fb} alt="Facebook" className="w-10 h-10 object-contain" />
              </a>

              {/* WhatsApp Appelez-Moi */}
              <a 
                href="https://wa.me/261325921281" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform bg-white/5 p-1 rounded-full"
              >
                <img src={wa} alt="WhatsApp" className="w-10 h-10 object-contain" />
              </a>

              {/* Instagram Appelez-Moi */}
              <a 
                href="https://www.instagram.com/appelezmoi207/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform bg-white/5 p-1 rounded-lg"
              >
                <img src={insta} alt="Instagram" className="w-10 h-10 object-contain" />
              </a>
            </div>
          </div>

          {/* Contact Rapide */}
          <div className="grid grid-cols-1 gap-3 text-slate-400 font-bold">
            <a href="tel:0325921281" className="flex items-center gap-2 hover:text-white transition">
              <Phone size={16} className="text-brand-accent"/> 032 59 212 81
            </a>
            <a href="mailto:direction@appelezmoi207.com" className="flex items-center gap-2 hover:text-white transition">
              <Mail size={16} className="text-brand-accent"/> direction@appelez-moi.mg
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-brand-accent mt-1 flex-shrink-0"/> 
              <span>Camp-vert, Hell-Ville 207, Nosy-Be</span>
            </div>
          </div>

          {/* Zone d'intervention */}
          <div className="text-slate-500 italic text-xs leading-relaxed border-l border-white/5 pl-4">
            Expert en maintenance à <span className="text-slate-300 font-bold">Nosy-Be</span>. 
            Services disponibles à Hell-Ville et périphérie.
          </div>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-slate-700 text-[10px] font-black uppercase tracking-widest">
          © 2026 APPELEZ-MOI SERVICES - NOSY-BE - NAGY Consulting
        </div>
      </div>
    </footer>
  );
};

export default Footer;