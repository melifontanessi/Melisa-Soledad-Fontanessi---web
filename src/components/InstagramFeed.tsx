import React from 'react';
import { Instagram, ExternalLink, UserCheck } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-24 bg-blanco border-b border-azul/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ocre font-bold block mb-3">
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
              className="inline-flex items-center gap-2 px-6 py-4 bg-azul hover:bg-azul/90 text-white font-bold text-xs uppercase tracking-widest transition-all"
            >
              <Instagram className="w-4 h-4" />
              Seguir en Instagram
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Embedded Instagram Feed Widget & Profile Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Profile Card & Info */}
          <div className="lg:col-span-4 p-8 border border-azul/10 bg-[#FAF9F6] relative">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-ocre" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img
                  src="https://github.com/melifontanessi.png"
                  alt="Melisa Fontanessi"
                  className="w-16 h-16 rounded-full object-cover border-2 border-ocre p-0.5"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80';
                  }}
                />
                <div className="absolute bottom-0 right-0 p-1 bg-azul text-white rounded-full border border-white">
                  <Instagram className="w-2.5 h-2.5" />
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

            <div className="space-y-3 pt-4 border-t border-azul/5 mb-6">
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
              className="w-full inline-flex items-center justify-center gap-2 py-3 border border-azul text-azul hover:bg-azul hover:text-white font-bold text-[10px] uppercase tracking-widest transition-all"
            >
              Ver Perfil Completo
              <UserCheck className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Incrustación / Live Embed Widget Block */}
          <div className="lg:col-span-8 border border-azul/10 bg-white p-6 relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-azul" />
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-azul/5">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                ✓ INCRASTACIÓN INTERACTIVA DE PERFIL
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase">Live Preview</span>
              </div>
            </div>

            {/* Simulated Live Instagram Widget or Iframe Block */}
            <div className="relative w-full overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center py-2 h-[280px]">
              {/* Instagram actual Iframe Embed representation */}
              <iframe 
                src="https://www.instagram.com/melifontanessi.ok/embed/" 
                className="w-full h-full border-0" 
                allowFullScreen 
                scrolling="no"
                title="Melisa Fontanessi Instagram Feed"
              />
            </div>
            
            <div className="mt-4 pt-3 border-t border-azul/5 text-center">
              <p className="text-[10px] font-sans text-slate-400 font-light">
                ¿No podés ver el feed en vivo? <a href="https://www.instagram.com/melifontanessi.ok/" target="_blank" rel="noopener noreferrer" className="text-ocre font-bold border-b border-ocre/30 hover:border-ocre transition-all">Hace clic acá para abrir tu perfil directamente en Instagram</a>.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
