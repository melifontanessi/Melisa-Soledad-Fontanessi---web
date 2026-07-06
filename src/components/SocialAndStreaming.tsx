import React from 'react';
import { Instagram, Youtube, Radio, ArrowRight, Star, Heart, MessageCircle } from 'lucide-react';

export default function SocialAndStreaming() {
  const instagramPosts = [
    {
      title: 'E-commerce & Conversión',
      desc: 'Claves analíticas para potenciar las ventas de tu tienda online.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
      likes: '142',
      comments: '18',
    },
    {
      title: 'IA en los Negocios',
      desc: 'Cómo integramos la Inteligencia Artificial en el marketing diario.',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=400&q=80',
      likes: '198',
      comments: '34',
    },
    {
      title: 'Branding Estratégico',
      desc: 'El valor de construir una marca sólida y coherente en el tiempo.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
      likes: '156',
      comments: '22',
    },
  ];

  return (
    <section id="comunidad" className="py-20 md:py-24 bg-[#FCFBF9] border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#84CC16] block mb-4">
            CONEXIONES & COMUNIDAD
          </span>
          <h2 className="font-display text-3xl md:text-[38px] font-black leading-[1.15] text-azul tracking-tight">
            Contenido, debate y estrategias fuera de la oficina.
          </h2>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: FOMO Streaming Card (Matches the provided image perfectly with premium sans-serif typography) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden relative group">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Text Area */}
              <div className="md:col-span-7">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#C68E4B] block mb-4">
                  MEDIA & COMMUNITY
                </span>
                
                {/* Custom Branded Heading */}
                <h3 className="font-display text-4xl md:text-[42px] font-extrabold text-azul leading-none mb-4 tracking-tight flex items-baseline flex-wrap gap-x-2">
                  <span>FOMO</span>
                  <span className="font-sans font-light italic text-[#C68E4B]">Streaming</span>
                </h3>

                <p className="font-sans text-sm text-slate-500 leading-relaxed font-light mb-6 pr-2">
                  Co-creadora de un espacio disruptivo en Rosario para debatir el futuro de los negocios, la tecnología y el diseño.
                </p>

                <a 
                  href="https://www.youtube.com/@FOMOStreaming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 bg-[#1E2D42] hover:bg-[#FF3B7A] text-white font-extrabold uppercase tracking-widest text-[10px] rounded-xl transition-all duration-300 shadow-sm"
                >
                  <Radio className="w-3.5 h-3.5 animate-pulse text-[#FF3B7A] group-hover:text-white" />
                  Ver episodios
                </a>
              </div>

              {/* Image Area */}
              <div className="md:col-span-5 relative">
                <div className="aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
                  <img 
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80"
                    alt="Melisa Fontanessi en FOMO Streaming"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  {/* Visual microphone element overlay representing the podcast photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-azul/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[9px] font-bold text-azul uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                    En vivo desde Rosario
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Instagram Outreach Card */}
          <div className="lg:col-span-5 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            
            <div>
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF3B7A] block mb-4">
                INSTAGRAM COMMUNITY
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-black text-azul leading-tight mb-2 tracking-tight">
                @melifontanessi.ok
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed font-light mb-6">
                Estrategias de marketing, optimización de e-commerce, tendencias de IA y el día a día de mi trabajo de consultoría independiente.
              </p>

              {/* Horizontal grid showing 3 beautiful instagram layouts */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {instagramPosts.map((post, i) => (
                  <a 
                    key={i}
                    href="https://www.instagram.com/melifontanessi.ok/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square rounded-xl overflow-hidden bg-slate-50 border border-slate-100 block group/post"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale-20 group-hover/post:grayscale-0 group-hover/post:scale-105 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover Overlay with stats */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/post:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 text-white text-[11px] font-bold">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        {post.comments}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a 
              href="https://www.instagram.com/melifontanessi.ok/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#FF3B7A] hover:bg-[#E22E67] text-white font-extrabold uppercase tracking-widest text-[10px] rounded-xl transition-all duration-300 shadow-sm w-full"
            >
              <Instagram className="w-4 h-4 text-white" />
              Seguir en Instagram
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
