import React, { useState } from 'react';
import { INITIAL_ARTICLES } from '../data';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function SubstackFeed() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitting(true);
    setErrorMessage('');

    try {
      const subscriberId = `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const subDocRef = doc(db, 'subscribers', subscriberId);

      await setDoc(subDocRef, {
        email: email.trim(),
        createdAt: serverTimestamp(),
      });

      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 8000);
    } catch (error) {
      console.error("Error subscribing newsletter to Firestore:", error);
      setErrorMessage("No se pudo procesar tu suscripción. Intenta de nuevo.");
      try {
        handleFirestoreError(error, OperationType.WRITE, 'subscribers');
      } catch (innerErr) {
        // Logged
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="recursos" className="py-20 md:py-24 bg-[#FAF2F1] border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & Newsletter Subscription */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#84CC16] block mb-4">
              CREACIÓN DE CONTENIDO
            </span>
            <h2 className="font-serif text-3xl md:text-[38px] font-black leading-[1.15] text-azul tracking-tight mb-4">
              Ideas, tendencias y estrategias en mi Substack
            </h2>
            <p className="font-sans text-sm text-slate-600 leading-relaxed font-light mb-8">
              Análisis semanales sobre marketing, negocios, liderazgo y tecnología, directamente a tu casilla de correo.
            </p>

            {/* Newsletter Subscription Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-rose-100/50 shadow-xs">
              {subscribed ? (
                <div className="text-center py-4 animate-fadeIn">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h4 className="font-sans text-sm font-bold text-azul mb-1">¡Suscripción exitosa!</h4>
                  <p className="font-sans text-xs text-slate-500 font-light">
                    Gracias por sumarte. Pronto recibirás las mejores estrategias de marketing y negocios.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input 
                      type="email"
                      required
                      disabled={submitting}
                      placeholder="Tu correo electrónico..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#FCFBF9] border border-slate-200 rounded-xl focus:outline-hidden focus:border-rosa-soft text-azul text-xs transition-all disabled:opacity-50"
                    />
                  </div>
                  {errorMessage && (
                    <p className="text-[10px] text-red-500 font-medium leading-relaxed animate-fadeIn">
                      {errorMessage}
                    </p>
                  )}
                  <button 
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-5 bg-[#FF3B7A] hover:bg-[#E22E67] disabled:bg-[#FF3B7A]/50 text-white font-extrabold uppercase tracking-widest text-[10px] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Procesando...' : 'Suscribirme'} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Curated Articles List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Últimas publicaciones destacadas
            </h3>
            
            <div className="space-y-4">
              {INITIAL_ARTICLES.map((art) => (
                <article 
                  key={art.id}
                  className="group bg-white p-5 rounded-2xl border border-slate-100 hover:border-rose-100 hover:shadow-xs transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center"
                >
                  {/* Image Cover */}
                  <div className="w-full sm:w-32 aspect-video sm:aspect-square shrink-0 rounded-xl overflow-hidden bg-slate-50">
                    <img 
                      src={art.coverImage} 
                      alt={art.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Text details */}
                  <div className="flex-grow flex flex-col justify-between h-full">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 bg-rose-50 text-rosa text-[9px] font-bold uppercase tracking-wider rounded-md mb-2">
                        {art.category}
                      </span>
                      <h4 className="font-sans text-sm font-bold text-azul group-hover:text-rosa transition-colors leading-snug mb-1.5">
                        {art.title}
                      </h4>
                      <p className="font-sans text-[11px] text-slate-500 leading-relaxed font-light line-clamp-2 mb-3">
                        {art.excerpt}
                      </p>
                    </div>

                    <a 
                      href={art.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-wider text-[#84CC16] hover:text-[#70AD12] transition-colors"
                    >
                      Leer en Substack <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Substack External Profile Button */}
            <div className="pt-4 text-center sm:text-left">
              <a 
                href="https://substack.com/@melifontanessi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-azul hover:text-rosa transition-colors"
              >
                Ver todas las publicaciones en Substack <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
