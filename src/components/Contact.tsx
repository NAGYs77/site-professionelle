import React, { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      accessKey: "sf_1in01cc4acn201878ifk060h", // REMPLACEZ PAR VOTRE CLÉ STATIC FORMS
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      subject: "Nouvelle demande d'intervention - Appelez-moi.mg",
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* CARTE EN ARRIÈRE-PLAN */}
      <div className="absolute inset-0 z-0">
        <iframe 
          title="Carte"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30190.123456789!2d47.52!3d-18.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2smg!4v123456789" 
          width="100%" 
          height="100%" 
          className="border-0 grayscale contrast-125 brightness-50"
          loading="lazy"
        ></iframe>
      </div>

      <div className="relative z-10 max-w-4xl w-full bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Demander une intervention</h2>
          <p className="text-slate-500 font-bold mt-2 italic">Réponse rapide garantie</p>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle2 size={60} className="text-green-600 animate-bounce" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 uppercase">Message Envoyé !</h3>
            <p className="text-slate-600 font-bold text-center">
              Merci ! Nous avons bien reçu votre demande.<br/> 
              Un responsable vous contactera sur votre email ou téléphone.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  name="name"
                  type="text" 
                  placeholder="Votre Nom complet" 
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  name="phone"
                  type="tel" 
                  placeholder="N° de Téléphone" 
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                />
              </div>
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                name="email"
                type="email" 
                placeholder="Votre adresse Email" 
                required
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-6 text-slate-400" size={20} />
              <textarea 
                name="message"
                placeholder="Décrivez votre problème..." 
                rows={4} 
                required
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>

          <button 
              type="submit"
               disabled={status === "sending"}
               className={`w-full text-white py-5 rounded-2xl font-black flex justify-center items-center gap-3 shadow-lg transition-all uppercase tracking-widest ${
                 status === "sending" ? "bg-slate-400" : "bg-blue-600 hover:bg-slate-900"
          }`}
      >
  {status === "sending" ? (
    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  ) : (
    <>
      <Send size={22} />  {/* L'icône Send est maintenant utilisée ici ! */}
      Envoyer la demande
    </>
  )}
</button>
            
            {status === "error" && (
              <p className="text-red-600 text-center font-bold">Une erreur est survenue. Réessayez.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;