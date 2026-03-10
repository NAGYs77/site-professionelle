import { Wrench, Cpu, Lightbulb, ChevronRight } from 'lucide-react';

const Services = () => {
  const servicesPlomberie = [
    "Débouchage de canalisations (WC, évier, douche)",
    "Recherche et réparation de fuite d'eau",
    "Installation de ballon électrique et robinetterie",
    "Pose de canalisation et tuyauterie cuivre/PVC",
    "Raccordements d'eau et évacuations",
    "Mise aux normes des équipements sanitaires",
    "Détartrage tuyauterie et entretien cumulus"
  ];

  const servicesInformatique = [
    "Dépannage appareils ménagers et électroniques",
    "Ordinateur : Problèmes d'image, de son ou système",
    "Matériel audio : amplificateurs, enceintes",
    "Suppression de logiciels malveillants et virus",
    "Configuration de connexion internet et WiFi",
    "Lenteur et optimisation complète du système",
    "Récupération de données perdues sur disque dur",
    "Installation de périphériques (imprimantes, scanners)",
    "Installation de Camera de surveillance",
    "Installation Starlink et solutions internet haut débit"
  ];

  const servicesElectricite = [
    "Dépannage électrique (court-circuit, panne totale)",
    "Installation électrique complète (neuve ou rénovation)",
    "Mise aux normes de sécurité (Tableau, Terre)",
    "Diagnostic et recherche de panne électrique",
    "Petits travaux (ventilateurs, chauffe-eau, prises)",
    "Raccordement d'appareils électroménagers lourds",
    "Installation d'éclairages intérieurs et extérieurs"
  ];

  return (
    <section id="services" className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de page */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-primary">
            Nos Domaines d'Intervention
          </h2>
          <div className="h-2 w-24 bg-brand-accent mx-auto rounded-full"></div>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto italic">
            Des techniciens experts à votre service pour des interventions rapides et garanties à Nosy-Be.
          </p>
        </div>

        {/* Grille des Services */}
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Carte Plomberie */}
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border-t-8 border-brand-accent shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-orange-100 p-4 rounded-2xl text-brand-accent shadow-inner">
                <Wrench size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-800">Plomberie</h3>
            </div>
            <ul className="space-y-4">
              {servicesPlomberie.map((s, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <span className="bg-brand-accent rounded-full p-1 mt-1 shrink-0 group-hover:scale-110 transition-transform">
                    <ChevronRight size={12} className="text-white" />
                  </span>
                  <span className="text-slate-700 font-semibold leading-snug">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Carte Informatique */}
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border-t-8 border-blue-600 shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 p-4 rounded-2xl text-blue-600 shadow-inner">
                <Cpu size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-800">Informatique</h3>
            </div>
            <ul className="space-y-4">
              {servicesInformatique.map((s, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <span className="bg-blue-600 rounded-full p-1 mt-1 shrink-0 group-hover:scale-110 transition-transform">
                    <ChevronRight size={12} className="text-white" />
                  </span>
                  <span className="text-slate-700 font-semibold leading-snug">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Carte Électricité */}
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border-t-8 border-red-600 shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-100 p-4 rounded-2xl text-red-600 shadow-inner">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-800">Électricité</h3>
            </div>
            <ul className="space-y-4">
              {servicesElectricite.map((s, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <span className="bg-red-600 rounded-full p-1 mt-1 shrink-0 group-hover:scale-110 transition-transform">
                    <ChevronRight size={12} className="text-white" />
                  </span>
                  <span className="text-slate-700 font-semibold leading-snug">{s}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bannière d'appel à l'action en bas de page */}
        <div className="mt-20 bg-brand-primary rounded-[3rem] p-10 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
                <h4 className="text-3xl font-black mb-4 uppercase">Un problème non listé ?</h4>
                <p className="mb-8 font-medium text-blue-100 italic">Nos techniciens polyvalents s'adaptent à toutes les situations d'urgence.</p>
                <button className="bg-brand-accent hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-lg active:scale-95">
                    Contactez un expert maintenant
                </button>
            </div>
            {/* Décoration de fond */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;