import React from 'react';
import { 
  TrendingUp, 
  HelpCircle, 
  Smartphone, 
  Sparkles, 
  Users, 
  UserCheck, 
  Settings, 
  Rocket, 
  Calendar, 
  Brain, 
  Megaphone, 
  Hash 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Estrategia de Marketing',
      desc: 'Planes estratégicos alineados a objetivos de negocio.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
      iconBg: 'bg-emerald-50',
    },
    {
      title: 'Consultoría para empresas',
      desc: 'Acompañamiento estratégico para tomar mejores decisiones.',
      icon: <HelpCircle className="w-5 h-5 text-rose-500" />,
      iconBg: 'bg-rose-50',
    },
    {
      title: 'Marketing Digital',
      desc: 'E-mail marketing, SEO, SEM, Ads y analítica.',
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
      iconBg: 'bg-emerald-50',
    },
    {
      title: 'Branding y Comunicación',
      desc: 'Diseño de marca, identidad y comunicación efectiva.',
      icon: <Sparkles className="w-5 h-5 text-rose-500" />,
      iconBg: 'bg-rose-50',
    },
    {
      title: 'Organización de equipos',
      desc: 'Capacitaciones y mejoras en procesos en equipos internos.',
      icon: <Users className="w-5 h-5 text-rosa" />,
      iconBg: 'bg-rosa-soft',
    },
    {
      title: 'Definición de Roles',
      desc: 'Claridad en responsabilidades y estructura del equipo.',
      icon: <UserCheck className="w-5 h-5 text-emerald-600" />,
      iconBg: 'bg-emerald-50',
    },
    {
      title: 'Definición de Procesos',
      desc: 'Procesos eficientes para escalar y crecer.',
      icon: <Settings className="w-5 h-5 text-rose-500" />,
      iconBg: 'bg-rose-50',
    },
    {
      title: 'Lanzamiento de proyectos',
      desc: 'De la idea al lanzamiento, con estrategia y planificación.',
      icon: <Rocket className="w-5 h-5 text-emerald-600" />,
      iconBg: 'bg-emerald-50',
    },
    {
      title: 'Gestión de eventos',
      desc: 'Organización integral de eventos corporativos y comerciales.',
      icon: <Calendar className="w-5 h-5 text-emerald-600" />,
      iconBg: 'bg-emerald-50',
    },
    {
      title: 'IA aplicada a procesos',
      desc: 'Automatización, prompts y productividad.',
      icon: <Brain className="w-5 h-5 text-rosa" />,
      iconBg: 'bg-rosa-soft',
    },
    {
      title: 'Publicidad digital: Google Ads y Meta Ads',
      desc: 'Campañas segmentadas que convierten.',
      icon: <Megaphone className="w-5 h-5 text-emerald-600" />,
      iconBg: 'bg-emerald-50',
    },
    {
      title: 'Estrategia para Redes Sociales',
      desc: 'Planes de contenido y planificación orientada a resultados.',
      icon: <Hash className="w-5 h-5 text-rose-500" />,
      iconBg: 'bg-rose-50',
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Sticky Area */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="font-serif text-3xl md:text-[40px] font-black leading-[1.15] text-azul tracking-tight mb-6">
              Las empresas no necesitan más publicaciones. <br />
              <span className="text-rosa">Necesitan dirección.</span>
            </h2>
            
            <p className="font-sans text-sm md:text-base text-slate-500 leading-relaxed font-light mb-6">
              No siempre el problema es el marketing. Muchas veces el problema está en la estrategia, los procesos o la comunicación. Ahí es donde puedo ayudarte.
            </p>
          </div>

          {/* Right Services Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-[#FCFBF9] border border-slate-50 rounded-2xl flex items-start gap-4 hover:shadow-md transition-all duration-300 group"
                >
                  {/* Icon Wrapper */}
                  <div className={`p-2.5 rounded-xl ${item.iconBg} shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  
                  {/* Text Details */}
                  <div className="space-y-1">
                    <h3 className="font-sans text-sm font-bold text-azul leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
