import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) return;
    
    // Simulate submission
    setFormSubmitted(true);
    setName('');
    setEmail('');
    setMsg('');
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contacto" className="py-24 bg-azul text-white relative overflow-hidden border-t border-azul/10">
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-rosa font-bold">
                ¿Hablamos?
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight mt-3 mb-6">
                Construyamos el próximo paso juntos.
              </h2>
              <p className="text-white/80 text-sm font-light leading-relaxed mb-8">
                Estoy disponible para consultorías estratégicas, asesorías de rebranding, optimización de e-commerce o liderazgo de nuevos proyectos digitales. No dudes en escribirme para agendar tu primera sesión de trabajo.
              </p>

              {/* Direct Info list with copy hooks */}
              <div className="space-y-4">
                
                {/* Email row */}
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-ocre transition-all">
                  <div className="flex items-center gap-3">
                    <div className="text-ocre">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-mono text-slate-400 font-bold tracking-widest">Email Directo</p>
                      <a href="mailto:melifontanessi@gmail.com" className="text-sm font-bold text-white hover:text-ocre transition-colors">
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
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-ocre transition-all">
                  <div className="flex items-center gap-3">
                    <div className="text-ocre">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-mono text-slate-400 font-bold tracking-widest">WhatsApp</p>
                      <a href="https://wa.me/5493424481854" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-ocre transition-colors">
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
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10">
                  <div className="text-ocre">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-mono text-slate-400 font-bold tracking-widest">Ubicación</p>
                    <p className="text-sm font-bold text-white">Rosario, Santa Fe, Argentina</p>
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
                  className="p-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-ocre transition-all border border-white/10"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://melifontanessi.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-ocre transition-all border border-white/10"
                  title="Substack"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 bg-white/5 border border-white/10 relative h-full">
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[350px] animate-fadeIn">
                  <div className="w-14 h-14 bg-white/10 border border-white/20 text-white flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-ocre" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    ¡Mensaje enviado con éxito!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-xs mx-auto leading-relaxed font-light">
                    Gracias por ponerte en contacto. Responderé a tu propuesta o inquietud a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <h3 className="font-serif text-lg font-bold text-white border-b border-white/10 pb-3 mb-6">
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
                      className="w-full px-4 py-3 bg-transparent border border-white/20 focus:outline-hidden focus:border-ocre text-white text-sm transition-all placeholder:text-slate-600 font-light"
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
                      className="w-full px-4 py-3 bg-transparent border border-white/20 focus:outline-hidden focus:border-ocre text-white text-sm transition-all placeholder:text-slate-600 font-light"
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
                      className="w-full px-4 py-3 bg-transparent border border-white/20 focus:outline-hidden focus:border-ocre text-white text-sm transition-all resize-none placeholder:text-slate-600 font-light"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4.5 bg-ocre hover:bg-white text-azul hover:text-azul font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Enviar Mensaje
                    <Send className="w-4 h-4" />
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
