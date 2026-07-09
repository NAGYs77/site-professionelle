import { CheckCircle2 } from 'lucide-react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';
import img15 from '../assets/15.jpg';
import img16 from '../assets/16.jpg';
import img17 from '../assets/17.jpg';
import img18 from '../assets/18.jpg';
import img19 from '../assets/19.jpg';
import img20 from '../assets/20.jpg';
import img21 from '../assets/21.jpg';
import img22 from '../assets/22.jpg';
import img23 from '../assets/23.jpg';
import img24 from '../assets/24.jpg';
import img25 from '../assets/25.jpg';
import img26 from '../assets/26.jpg';
import img27 from '../assets/27.jpg';
import img28 from '../assets/28.jpg';
import img29 from '../assets/29.jpg';
import img30 from '../assets/30.jpg';
import img31 from '../assets/31.jpg';
import info from '../assets/info.png'
const About = () => {
  // L'image "Ordinateur / Technicien" que tu as aimée
  

  // Liste ordonnée de tes 31 images pour le défilement
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31
  ];
  
  const scrollingImages = [...images, ...images];

  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- SECTION NOTRE SAVOIR-FAIRE (AVEC IMAGE ORDINATEUR) --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            {/* ICI : L'image d'ordinateur que tu as demandée */}
            <img 
              src={info} 
              alt="Expert Maintenance Informatique" 
              className="rounded-[2.5rem] shadow-2xl w-full h-[450px] object-cover border-4 border-white" 
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-accent text-white p-8 rounded-2xl hidden lg:block shadow-xl">
              <p className="text-4xl font-black">+10</p>
              <p className="font-bold uppercase text-xs tracking-widest">Ans d'expérience</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-brand-primary leading-tight uppercase">Notre Savoir-Faire</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Chez <strong className="text-brand-primary">Appelez-Moi</strong>, notre expertise couvre aussi bien 
              la réparation des materiels informatique de pointe que les installations électriques complexes. 
              Chaque intervention est le fruit d'une rigueur technique inégalée à Madagascar.
            </p>
            <div className="grid gap-4">
              {["Maintenance Informatique", "Électricité & Réseaux", "Dépannage Urgent", "Expertise Certifiée" , "Plomberie"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-slate-700">
                  <CheckCircle2 className="text-brand-accent" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- GALERIE DÉFILANTE AVEC  31 PHOTOS --- */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-slate-800 uppercase">Nos Interventions Terrain</h3>
            <span className="text-brand-accent font-black text-sm uppercase tracking-widest hidden md:block animate-pulse">
              Travaux réels éffectué •
            </span>
          </div>
          
          <div className="relative flex">
            <div className="animate-infinite-scroll flex gap-6 py-4">
              {scrollingImages.map((info, index) => (
                <div 
                  key={index} 
                  className="w-72 h-48 md:w-80 md:h-56 flex-shrink-0 bg-white p-2 rounded-2xl shadow-lg border border-slate-200 overflow-hidden group"
                >
                  <img 
                    src={info} 
                    alt={`Chantier ${index + 1}`} 
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                    
                    onError={(e) => { (e.target as HTMLImageElement).src = info }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;