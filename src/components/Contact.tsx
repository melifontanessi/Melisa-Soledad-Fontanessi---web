import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) return;

    setSubmitting(true);
    setErrorMessage('');

    try {
      const messageId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const messageDocRef = doc(db, 'messages', messageId);

      await setDoc(messageDocRef, {
        name: name.trim(),
        email: email.trim(),
        msg: msg.trim(),
        createdAt: serverTimestamp(),
      });

      setFormSubmitted(true);
      setName('');
      setEmail('');
      setMsg('');
      setTimeout(() => {
        setFormSubmitted(false);
      }, 6000);
    } catch (error) {
      console.error("Error submitting contact form to Firestore:", error);
      setErrorMessage("No se pudo enviar el mensaje. Por favor, intenta de nuevo.");
      try {
        handleFirestoreError(error, OperationType.WRITE, `messages`);
      } catch (innerErr) {
        // Logged
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-azul text-white relative overflow-hidden border-t border-slate-100">
      {/* Premium ambient light filters for background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rosa/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-450 bg-[#E5B7B1]/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-rosa font-bold bg-white/10 px-3 py-1 rounded-full inline-block">
                ¿Hablamos?
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight mt-5 mb-6">
                Construyamos el próximo paso juntos.
              </h2>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-8">
                Estoy disponible para consultorías estratégicas, asesorías de rebranding, optimización de e-commerce o liderazgo de nuevos proyectos digitales. No dudes en escribirme para agendar tu primera sesión de trabajo.
              </p>

              {/* Direct Info list with copy hooks */}
              <div className="space-y-4">
                
                {/* Email row */}
                <div className="flex items-center justify-between p-4.5 bg-white/5 border border-white/10 rounded-2xl hover:border-rosa/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="text-rosa">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-mono text-slate-400 font-bold tracking-widest">Email Directo</p>
                      <a href="mailto:melifontanessi@gmail.com" className="text-sm font-semibold text-white hover:text-rosa transition-colors">
                        melifontanessi@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('melifontanessi@gmail.com', 'email')}
                    className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copiar email"
                  >
                    {copiedText === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone row */}
                <div className="flex items-center justify-between p-4.5 bg-white/5 border border-white/10 rounded-2xl hover:border-rosa/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="text-rosa">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-mono text-slate-400 font-bold tracking-widest">WhatsApp</p>
                      <a href="https://wa.me/5493424481854" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-rosa transition-colors">
                        +54 9 342 4481854
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('+5493424481854', 'phone')}
                    className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copiar teléfono"
                  >
                    {copiedText === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location row */}
                <div className="flex items-center gap-3 p-4.5 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="text-[#FF3B7A]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-mono text-slate-400 font-bold tracking-widest">Ubicación</p>
                    <p className="text-sm font-semibold text-white">Rosario, Santa Fe, Argentina</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer Sign-off and social networks */}
            <div className="mt-12 lg:mt-0 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-base text-white">Melisa Fontanessi</p>
                <p className="text-[9px] font-mono text-slate-400 tracking-widest uppercase">Consultoría Estratégica © 2026</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/melisafontanessi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white text-slate-300 hover:text-azul rounded-full transition-all duration-300 border border-white/10"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://melifontanessi.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white text-slate-300 hover:text-azul rounded-full transition-all duration-300 border border-white/10"
                  title="Substack"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-lg relative h-full">
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[350px] animate-fadeIn">
                  <div className="w-16 h-16 bg-white/10 border border-white/25 text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                    <CheckCircle2 className="w-8 h-8 text-[#FF3B7A]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    ¡Mensaje enviado con éxito!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-xs mx-auto leading-relaxed font-light">
                    Gracias por ponerte en contacto. Responderé a tu propuesta o inquietud a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <h3 className="font-serif text-xl font-bold text-white border-b border-white/10 pb-3 mb-6">
                    Enviame un Mensaje
                  </h3>

                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-300 font-bold mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-3.5 bg-white/5 border border-white/15 focus:border-[#FF3B7A] focus:bg-white/10 rounded-2xl focus:outline-hidden text-white text-sm transition-all placeholder:text-slate-500 font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-300 font-bold mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="juan@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-3.5 bg-white/5 border border-white/15 focus:border-[#FF3B7A] focus:bg-white/10 rounded-2xl focus:outline-hidden text-white text-sm transition-all placeholder:text-slate-500 font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-300 font-bold mb-2">
                      Tu Mensaje
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="¿En qué tipo de proyecto estás pensando trabajar? Detállalo aquí..."
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      className="w-full px-5 py-3.5 bg-white/5 border border-white/15 focus:border-[#FF3B7A] focus:bg-white/10 rounded-2xl focus:outline-hidden text-white text-sm transition-all resize-none placeholder:text-slate-500 font-light"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-red-500/15 border border-red-500/30 rounded-2xl text-rose-300 text-xs font-light leading-relaxed animate-fadeIn">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4.5 bg-[#FF3B7A] hover:bg-[#E22E67] disabled:bg-[#FF3B7A]/50 text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:scale-100 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                     {submitting ? 'Enviando...' : 'Enviar Mensaje'}
                     <Send className={`w-4 h-4 text-white ${submitting ? 'animate-pulse' : ''}`} />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
