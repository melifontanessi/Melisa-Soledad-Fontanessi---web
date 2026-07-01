import React from 'react';
import { Instagram, ExternalLink, UserCheck } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-24 bg-[#FDFCFB] border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ocre font-bold bg-rosa/25 text-azul px-3 py-1 rounded-full inline-block mb-4">
              CONTENIDO EN REDES
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-azul leading-tight tracking-tight mb-4">
              Contenido en Redes
            </h2>
            <p className="font-sans text-sm md:text-base text-azul/80 font-light leading-relaxed">
              Comparto consejos diarios, reflexiones tácticas sobre e-commerce, transformación digital con IA y casos de branding real de forma abierta. Seguí mis publicaciones en Instagram y mantengamos la conversación.
            </p>
          </div>
          <div>
            <a
              href="https://www.instagram.com/melifontanessi.ok/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 bg-azul hover:bg-white text-white hover:text-azul border border-azul hover:border-slate-200 rounded-full font-bold text-xs uppercase tracking-widest shadow-md transition-all duration-300"
            >
              <Instagram className="w-4 h-4 text-rosa" />
              Seguir en Instagram
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Embedded Instagram Feed Widget & Profile Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Profile Card & Info */}
          <div className="lg:col-span-4 p-8 rounded-[2.5rem] border border-slate-100 bg-white shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#C68E4B]" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img
                  src="https://github.com/melifontanessi.png"
                  alt="Melisa Fontanessi"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C68E4B] p-0.5 shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80';
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 right-0 p-1.5 bg-azul text-white rounded-full border-2 border-white shadow-xs">
                  <Instagram className="w-3 h-3 text-rosa" />
                </div>
              </div>
              <div>
                <h3 className="font-sans text-base font-bold text-azul">@melifontanessi.ok</h3>
                <p className="text-[10px] text-slate-400 font-mono tracking-wider font-bold">ESTRATEGIA & BRANDING</p>
              </div>
            </div>

            <p className="text-xs text-azul/80 leading-relaxed mb-6 font-light">
              Espacio dinámico donde analizo marcas, tendencias de Inteligencia Artificial aplicada, automatización de negocios y optimización de tasa de conversión en e-commerce.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-50 mb-6">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Publicaciones</span>
                <span className="font-mono font-bold text-azul">250+</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Seguidores</span>
                <span className="font-mono font-bold text-azul">1.5k+</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Temáticas Clave</span>
                <span className="font-mono font-bold text-ocre">Conversión, IA & Branding</span>
              </div>
            </div>

            <a
              href="https://www.instagram.com/melifontanessi.ok/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-rosa/15 text-azul hover:bg-azul hover:text-white rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300"
            >
              Ver Perfil Completo
              <UserCheck className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Incrustación / Live Embed Widget Block */}
          <div className="lg:col-span-8 border border-rose-100 bg-[#fdf0ec] p-8 rounded-[2.5rem] relative flex flex-col justify-between shadow-xs overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-rosa" />
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-900/10">
              <span className="font-mono text-[9px] uppercase tracking-widest text-rose-800 font-bold">
                ✓ INCRUSTACIÓN INTERACTIVA DE PERFIL
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono font-semibold text-rose-900/80 uppercase">Live Preview</span>
              </div>
            </div>

            {/* Simulated Live Instagram Widget or Iframe Block */}
            <div className="relative w-full overflow-hidden bg-white/70 border border-rose-100 rounded-2xl flex items-center justify-center py-2 h-[280px] shadow-inner">
              {/* Instagram actual Iframe Embed representation */}
              <iframe 
                src="https://www.instagram.com/melifontanessi.ok/embed/" 
                className="w-full h-full border-0 rounded-xl" 
                allowFullScreen 
                scrolling="no"
                title="Melisa Fontanessi Instagram Feed"
              />
            </div>
            
            <div className="mt-4 pt-3 border-t border-rose-900/10 text-center">
              <p className="text-[10px] font-sans text-rose-950/80 font-light">
                ¿No podés ver el feed en vivo? <a href="https://www.instagram.com/melifontanessi.ok/" target="_blank" rel="noopener noreferrer" className="text-[#C68E4B] font-bold border-b border-rose-450 hover:border-[#C68E4B] transition-all">Hace clic acá para abrir tu perfil directamente en Instagram</a>.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
