import React from 'react';
import { Check, Send, Zap, Briefcase, MessageSquare, Sparkles } from 'lucide-react';

export default function Services() {
  const servicesData = [
    {
      id: 'ecommerce',
      title: 'Consultoría Estratégica: Estrategia Digital & E-commerce',
      tagline: 'Gestión de canales enfocada 100% en la conversión. Analizo, ejecuto y mido cada acción con un objetivo claro: tu retorno de inversión.',
      description: 'Estrategias de conversión reales con foco en el retorno de inversión comercial, diseñando cada paso con claridad y control analítico de punta a punta.',
      includes: [
        'Estrategia de contenidos unificada y premium.',
        'Campañas avanzadas en Meta Suite y Google Ads.',
        'SEO y optimización orgánica para aumentar tus ventas.',
        'Email Marketing automatizado enfocado en la retención.',
        'Reportes analíticos mensuales de performance.'
      ],
      packages: [
        {
          name: 'E-commerce Accelerator',
          period: 'Plan Trimestral',
          price: 'Consultar tarifas corporativas',
          bestFor: '¿Para quién es? Empresas con tienda online activa que buscan duplicar su tasa de conversión y optimizar su inversión publicitaria.'
        }
      ],
      icon: <Zap className="w-5 h-5 text-[#C68E4B]" />,
      bgClass: 'bg-white',
      borderClass: 'border-slate-100 hover:border-[#C68E4B]/35'
    },
    {
      id: 'consulting',
      title: 'Consultoría en Dirección de Marketing',
      tagline: 'Estructuración estratégica de áreas desde cero.',
      description: 'Si sabés que tu empresa necesita dar el salto en marketing, branding y automatización, pero no tenés claro por dónde empezar, yo te ayudo. Analizo tu negocio, diseño la estrategia integral, armo los procesos y establezco los KPIs para que tu equipo opere con claridad y propósito.',
      includes: [
        'Auditoría inicial y diagnóstico situacional de tu marca.',
        'Plan Anual de Marketing alineado a tus objetivos comerciales.',
        'Diseño de estructura, perfiles de equipo y roles clave para el área.',
        'Tablero de control con KPIs y OKRs para medir el éxito real.',
        'Integración tecnológica: herramientas de automatización e Inteligencia Artificial aplicadas al negocio.'
      ],
      packages: [
        {
          name: 'Corporate Blueprint',
          period: 'Plan a medida (1 a 3 meses)',
          price: 'Estrategia 100% personalizada',
          bestFor: '¿Para quién es? Empresas consolidadas, PYMEs o laboratorios que necesitan fundar bases sólidas, ordenar su comunicación y estructurar su departamento interno de marketing.'
        }
      ],
      icon: <Briefcase className="w-5 h-5 text-rose-600" />,
      bgClass: 'bg-[#fdf0ec]', // Gorgeous soft pink/rose card background to fulfill user request!
      borderClass: 'border-rose-100 hover:border-rose-250'
    },
    {
      id: 'mentoring',
      title: 'Asesoría & Acompañamiento Estratégico',
      tagline: 'Dirección externa experta para equipos internos de ejecución.',
      description: 'Para marcas y empresas que ya cuentan con diseñadores o creadores de contenido, pero necesitan una dirección estratégica de alto nivel que supervise el rumbo, optimice los resultados y capacite al equipo de forma continua. Yo me convierto en tu aliada estratégica mensual.',
      includes: [
        'Sesiones de alineación y análisis estratégico vía Zoom o Meet.',
        'Auditoría y revisión profunda de las acciones de marketing y sus resultados.',
        'Soporte continuo y comunicación ágil vía WhatsApp para desbloquear decisiones.',
        'Capacitación en tendencias: formación para tu equipo en branding, contenido premium y herramientas de IA.'
      ],
      packages: [
        {
          name: 'Strategic Partner Monthly',
          period: 'Suscripción Mensual',
          price: 'Abono estratégico mensual',
          bestFor: '¿Para quién es? Equipos que ejecutan bien el día a día pero requieren una mirada externa, rigurosa y experimentada para potenciar el retorno de inversión y mantenerse a la vanguardia.'
        }
      ],
      icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
      bgClass: 'bg-white',
      borderClass: 'border-slate-100 hover:border-indigo-200'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-[#FDFCFB] border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ocre font-bold bg-rosa/25 text-azul px-3 py-1 rounded-full inline-block mb-4">
            SOLUCIONES ESTRATÉGICAS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-azul leading-tight tracking-tight mb-6">
            Estructuras de Servicio & <span className="italic font-normal text-ocre">Paquetes de Valor</span>
          </h2>
          <p className="font-sans text-lg text-azul/80 leading-relaxed font-light">
            Diseño soluciones integrales que transforman la identidad visual de tu marca y potencian su rendimiento comercial. Sin tareas aisladas, solo estrategias reales que dan resultados.
          </p>
        </div>

        {/* Services & Packages List */}
        <div className="space-y-12">
          {servicesData.map((svc) => (
            <div 
              key={svc.id} 
              className={`p-8 md:p-12 rounded-[2.5rem] border shadow-xs hover:shadow-lg transition-all duration-500 overflow-hidden relative ${svc.bgClass} ${svc.borderClass}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                
                {/* Solución description */}
                <div className="lg:col-span-7 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-full bg-white border border-slate-100 shadow-xs">
                        {svc.icon}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                        Servicio Consultoría Directo
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-azul mb-4 leading-tight">
                      {svc.title}
                    </h3>
                    
                    <p className="font-sans text-base font-semibold text-[#C68E4B] mb-4 leading-relaxed">
                      {svc.tagline}
                    </p>
                    
                    <p className="font-sans text-sm text-azul/80 mb-8 leading-relaxed font-light">
                      {svc.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-azul/5 pb-2">
                      ¿Qué incluye de punta a punta?
                    </h4>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {svc.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-azul/90 leading-relaxed">
                          <span className="text-[#C68E4B] mt-0.5 shrink-0">
                            <Check className="w-3.5 h-3.5 font-bold" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Paquete / Pricing card details - redesigned with beautiful rounded-3xl layouts */}
                <div className="lg:col-span-5 bg-azul text-white p-8 rounded-3xl flex flex-col justify-between shadow-md relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                  
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-rosa text-[9px] font-mono font-bold uppercase tracking-widest rounded-full mb-4">
                      <Sparkles className="w-3 h-3 text-rosa" />
                      PAQUETE CORPORATIVO
                    </div>
                    {svc.packages.map((pkg, pIdx) => (
                      <div key={pIdx} className="mt-4">
                        <h4 className="font-serif text-2xl font-bold text-white mb-1">
                          {pkg.name}
                        </h4>
                        <span className="font-mono text-xs text-[#C68E4B] font-bold uppercase tracking-wider block mb-4">
                          {pkg.period}
                        </span>
                        <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                          {pkg.bestFor}
                        </p>
                        <div className="pt-5 border-t border-white/10 mb-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">INVERSIÓN ESTIMADA</span>
                          <p className="font-serif text-2xl font-bold text-rosa mt-1">
                            {pkg.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href="https://wa.me/5493424481854"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#C68E4B] hover:bg-white text-white hover:text-azul font-bold text-xs uppercase tracking-widest rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      Consultar Estructura
                      <Send className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
