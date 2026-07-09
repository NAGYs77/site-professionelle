import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Importation des icônes depuis lucide-react
import { Droplet, Zap, Monitor } from 'lucide-react';

// Importation de l'image de fond initiale et des autres images pour le défilement
import gemBackground from '../assets/gem.png';
import plomberieImg from '../assets/plomberi.jpg';
import electroImg from '../assets/electro.png';
import infoImg from '../assets/info.png';

// Tableau des images qui vont défiler en arrière-plan
const BACKGROUND_IMAGES = [gemBackground, plomberieImg, electroImg, infoImg];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Données des services avec des icônes au lieu d'images
  const services = [
    {
      title: "Plomberie",
      desc: "Installation, dépannage de tuyauterie et sanitaires à Nosy-Be.",
      icon: Droplet,
      delay: 0.1
    },
    {
      title: "Électricité",
      desc: "Mise aux normes, dépannage électrique et installations sécurisées.",
      icon: Zap,
      delay: 0.4
    },
    {
      title: "Informatique",
      desc: "Réparation d'ordinateurs, maintenance réseau et matériel informatique.",
      icon: Monitor,
      delay: 0.7
    }
  ];

  // Gestion du défilement des images de fond (toutes les 6 secondes)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden font-sans bg-slate-950">
      
      {/* ARRIÈRE-PLAN DÉFILLANT ANIMÉ */}
      <div className="fixed inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BACKGROUND_IMAGES[index]})` }}
          />
        </AnimatePresence>
        {/* Voile sombre pour garder le texte lisible */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 w-full max-w-7xl px-6 py-12 flex flex-col gap-12 mt-12 pb-16">
        
      
       

        {/* GRILLE DES 3 CARRÉS */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                onClick={() => navigate('/services')}
                className="group cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-105 hover:bg-white/20 flex flex-col items-center p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
              >
                {/* ICÔNE DU MÉTIER AVEC EFFET AU SURVOL */}
                <div className="p-5 rounded-3xl bg-white/10 text-white mb-6 transition-colors duration-300 group-hover:bg-blue-600">
                  <Icon size={40} strokeWidth={1.5} />
                </div>

                {/* DESCRIPTION */}
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-3 transition-colors duration-300 group-hover:text-blue-200">
                  {service.title}
                </h3>
                <p className="text-slate-200 text-sm font-medium leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                <div className="text-blue-200 font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center transition-colors duration-300 group-hover:text-white">
                  Voir plus <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* INDICATEURS DE SLIDES (PETITS POINTS) */}
        <div className="flex justify-center gap-2 mt-4">
          {BACKGROUND_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-8 bg-blue-500' : 'w-2 bg-white/20 hover:bg-white/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>

    </main>
  );
};

export default Hero;