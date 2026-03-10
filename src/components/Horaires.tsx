import { Clock } from 'lucide-react';

const Horaires = () => {
  const jours = [
    { j: "Lundi - Samedi", h: "24h / 24h" },
    { j: "Dimanche", h: "09h - 22h", s: true }
  ];

  return (
    <section id="horaires" className="py-24 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-black flex items-center gap-4"><Clock className="text-brand-accent" /> Horaires</h2>
          <div className="grid gap-4">
            {jours.map((item, i) => (
              <div key={i} className={`flex justify-between p-6 rounded-xl border ${item.s ? 'border-brand-accent' : 'border-white/10'}`}>
                <span className="font-bold">{item.j}</span>
                <span className="text-brand-accent font-black">{item.h}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-80 rounded-[2.5rem] overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120000!2d47.5!3d-18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07da0933758bb%3A0xc39f2854b42f6d4!2sNosybe!5e0!3m2!1sfr!2smg!4v1700000000000" width="100%" height="100%" style={{border:0}}></iframe>
        </div>
      </div>
    </section>
  );
};

export default Horaires;