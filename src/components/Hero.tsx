import gemBackground from '../assets/gem.png'

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen bg-slate-950 overflow-hidden">
      
      {/* --- IMAGE EN PLEIN ÉCRAN (Largeur et Hauteur totales) --- */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat shadow-inner"
        style={{ 
          backgroundImage: `url(${gemBackground})`,
          // Clarté maximale, sans aucun filtre ni flou
          filter: 'brightness(1) contrast(1)',
          // 'cover' force l'image à prendre toute la largeur possible
          backgroundSize: 'cover' 
        }}
      >
      </div>

      {/* --- AUCUN DÉGRADÉ NI FLOU ICI --- */}

    </section>
  );
};

export default Hero;