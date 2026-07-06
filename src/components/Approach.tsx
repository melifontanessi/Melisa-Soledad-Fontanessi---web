import React from 'react';
import { 
  TrendingUp, 
  HelpCircle, 
  Users, 
  Megaphone, 
  Building, 
  Lightbulb, 
  User, 
  Settings,
  Search,
  List,
  GitBranch,
  Send,
  BarChart2,
  Volume2,
  Target,
  ClipboardList,
  Monitor
} from 'lucide-react';

export default function Approach() {
  const painPoints = [
    {
      title: 'Mi empresa vende pero no crece.',
      icon: <TrendingUp className="w-5 h-5 text-rose-500" />,
    },
    {
      title: 'No sabemos por dónde empezar.',
      icon: <HelpCircle className="w-5 h-5 text-rose-500" />,
    },
    {
      title: 'El equipo trabaja mucho pero sin dirección.',
      icon: <Users className="w-5 h-5 text-rose-500" />,
    },
    {
      title: 'Hacemos marketing pero no vemos resultados.',
      icon: <Megaphone className="w-5 h-5 text-rose-500" />,
    },
    {
      title: 'Necesitamos profesionalizar el área.',
      icon: <Building className="w-5 h-5 text-rose-500" />,
    },
    {
      title: 'Tenemos muchas ideas pero ningún plan.',
      icon: <Lightbulb className="w-5 h-5 text-rose-500" />,
    },
    {
      title: 'Definición de Roles',
      icon: <User className="w-5 h-5 text-rose-500" />,
    },
    {
      title: 'Definición de procesos',
      icon: <Settings className="w-5 h-5 text-rose-500" />,
    },
  ];

  const steps = [
    {
      num: '1',
      title: 'Escucho.',
      desc: 'Entiendo tu negocio, tus desafíos y objetivos.',
      icon: <Volume2 className="w-5 h-5 text-azul" />,
    },
    {
      num: '2',
      title: 'Analizo.',
      desc: 'Investigo, observo y diagnostico la situación.',
      icon: <Search className="w-5 h-5 text-azul" />,
    },
    {
      num: '3',
      title: 'Ordeno.',
      desc: 'Prioridades, recursos, equipos y procesos.',
      icon: <List className="w-5 h-5 text-azul" />,
    },
    {
      num: '4',
      title: 'Diseñamos la estrategia.',
      desc: 'Plan claro, objetivos y acciones.',
      icon: <GitBranch className="w-5 h-5 text-azul" />,
    },
    {
      num: '5',
      title: 'La implementamos.',
      desc: 'Ejecutamos el plan con foco y coordinación.',
      icon: <Send className="w-5 h-5 text-azul" />,
    },
    {
      num: '6',
      title: 'Medimos.',
      desc: 'Analizamos resultados y optimizamos.',
      icon: <BarChart2 className="w-5 h-5 text-azul" />,
    },
  ];

  return (
    <section id="sobre-mi" className="bg-white">
      {/* 1. PUEDO AYUDARTE CON */}
      <div className="py-20 md:py-24 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#84CC16] block mb-4">
                PUEDO AYUDARTE CON
              </span>
              <h2 className="font-serif text-3xl md:text-[38px] font-black leading-[1.15] text-azul tracking-tight">
                Acompañamiento estratégico integral para que logres mejorar los resultados de tu negocio.
              </h2>
            </div>

            {/* Right Pain Points Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {painPoints.map((item, index) => (
                  <div 
                    key={index}
                    className="p-5 bg-[#FCFBF9] border border-slate-50 rounded-xl flex items-center gap-4 hover:border-rosa-soft hover:shadow-xs transition-all duration-300"
                  >
                    {/* Icon Circle */}
                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    {/* Title */}
                    <span className="font-sans text-sm font-bold text-azul leading-snug">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. CÓMO TRABAJO */}
      <div className="py-20 md:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#84CC16] block mb-4">
              CÓMO TRABAJO
            </span>
            <h2 className="font-serif text-3xl md:text-[38px] font-black leading-[1.15] text-azul tracking-tight">
              Un proceso claro para transformar ideas en resultados.
            </h2>
          </div>

          {/* Stepper Timeline Progress Flow */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {steps.map((item, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left relative">
                  
                  {/* Icon wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 border border-slate-100 shadow-2xs">
                    {item.icon}
                  </div>

                  {/* Text Details */}
                  <h3 className="font-sans text-sm font-black text-azul mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 3. INTERMEDIARY BANNER */}
      <div className="py-12 md:py-16 bg-[#0B1528] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rosa-soft/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Illustration & Subtitle column */}
            <div className="lg:col-span-6 flex flex-col md:flex-row items-center gap-6">
              {/* Illustration Graphics */}
              <div className="bg-white/5 border border-white/15 p-6 rounded-3xl flex items-center justify-center shrink-0 w-32 h-32 md:w-36 md:h-36 relative">
                <Target className="w-10 h-10 text-rosa absolute top-4 left-4" />
                <ClipboardList className="w-8 h-8 text-emerald-400 absolute bottom-4 left-4" />
                <Monitor className="w-8 h-8 text-indigo-400 absolute bottom-4 right-4" />
              </div>
              
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-black leading-tight tracking-tight">
                  Lo que puedo aportar <br />
                  <span className="text-[#84CC16]">a tu empresa.</span>
                </h3>
              </div>
            </div>

            {/* Right Text details Column */}
            <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
              <p className="font-sans text-sm md:text-base text-slate-300 leading-relaxed font-light">
                No importa si hoy necesitás una campaña, un evento, una web o reorganizar tu comunicación. Mi trabajo consiste en encontrar la estrategia correcta para que todas esas acciones tengan sentido.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
