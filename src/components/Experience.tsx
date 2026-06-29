import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, Star, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-blanco border-y border-azul/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ocre font-bold mb-3 block">
            TRAYECTORIA SELECCIONADA
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-azul tracking-tight mb-6">
            Trayectoria Profesional
          </h2>
          <p className="font-sans text-lg text-azul/80 leading-relaxed font-light">
            Más de 15 años cruzando comunicación visual, marketing digital de alta conversión y dirección de marcas. Mi experiencia combina la gestión de presupuestos masivos y equipos regionales en corporaciones con la creación y el impulso de negocios desde sus cimientos. No solo diseño estrategias: sé lo que cuesta y lo que rinde hacerlas realidad.
          </p>
        </div>

        {/* Experience Sections Split Grid or Continuous Flow */}
        <div className="space-y-20 max-w-5xl mx-auto">
          
          {/* Section 1: Experiencia de Dirección */}
          <div>
            <div className="flex items-center gap-3 mb-10 border-b border-azul/5 pb-4">
              <div className="p-2 bg-azul text-white">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-azul uppercase tracking-tight">
                💼 Experiencia de Dirección
              </h3>
            </div>

            <div className="space-y-12">
              
              {/* Job 1: Droguería 20 de Junio */}
              <div className="relative pl-6 md:pl-10 border-l-2 border-ocre/30 py-1">
                {/* Timeline dot decoration */}
                <div className="absolute top-2.5 left-[-6px] w-2.5 h-2.5 bg-white border border-ocre rounded-full" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-azul">
                      Responsable de Marketing
                    </h4>
                    <p className="text-sm font-mono font-bold text-ocre uppercase tracking-wider mt-1">
                      Droguería 20 de Junio
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end text-left md:text-right">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-ocre" /> 2021 – Actualidad
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> Salud & Distribución a Escala Nacional
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="p-4 bg-[#FAF9F6] border border-azul/5">
                    <h5 className="font-mono text-[10px] font-bold uppercase tracking-widest text-azul mb-2">Construcción desde cero</h5>
                    <p className="text-xs text-azul/80 leading-relaxed font-light">
                      Diseñé y estructuré el departamento de marketing completo de la compañía, creando los procesos, el equipo interno y los tableros de control (KPIs) desde bases nulas.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FAF9F6] border border-azul/5">
                    <h5 className="font-mono text-[10px] font-bold uppercase tracking-widest text-azul mb-2">Rebranding 360°</h5>
                    <p className="text-xs text-azul/80 leading-relaxed font-light">
                      Lideré la transformación de la identidad corporativa para acompañar la expansión nacional de la empresa.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FAF9F6] border border-azul/5">
                    <h5 className="font-mono text-[10px] font-bold uppercase tracking-widest text-azul mb-2">E-commerce de alto rendimiento</h5>
                    <p className="text-xs text-azul/80 leading-relaxed font-light">
                      Dirección analítica del canal de venta digital, logrando un incremento sostenido en la facturación y optimizando la tasa de conversión.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FAF9F6] border border-azul/5">
                    <h5 className="font-mono text-[10px] font-bold uppercase tracking-widest text-azul mb-2">ExpoFarma</h5>
                    <p className="text-xs text-azul/80 leading-relaxed font-light">
                      Producción integral y coordinación comercial de este mega evento de negocios de la región, uniendo a los principales laboratorios nacionales, farmacias y celebridades en un espacio de networking de alto impacto.
                    </p>
                  </div>
                </div>
              </div>

              {/* Job 2: Randstad Argentina & Uruguay */}
              <div className="relative pl-6 md:pl-10 border-l-2 border-ocre/30 py-1">
                {/* Timeline dot decoration */}
                <div className="absolute top-2.5 left-[-6px] w-2.5 h-2.5 bg-white border border-ocre rounded-full" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-azul">
                      Digital Marketing Manager
                    </h4>
                    <p className="text-sm font-mono font-bold text-ocre uppercase tracking-wider mt-1">
                      Randstad Argentina & Uruguay
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end text-left md:text-right">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-ocre" /> 2017 – 2021
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> Recursos Humanos & Transformación Digital
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <div className="p-4 bg-[#FAF9F6] border border-azul/5">
                    <h5 className="font-mono text-[10px] font-bold uppercase tracking-widest text-azul mb-2">Estrategia Regional</h5>
                    <p className="text-xs text-azul/80 leading-relaxed font-light">
                      Gestión y monitoreo del presupuesto y la estrategia digital táctica para ambos países, liderando equipos internos y agencias externas.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FAF9F6] border border-azul/5">
                    <h5 className="font-mono text-[10px] font-bold uppercase tracking-widest text-azul mb-2">Hito SEO</h5>
                    <p className="text-xs text-azul/80 leading-relaxed font-light">
                      Logré un incremento del +50% en el posicionamiento orgánico del portal corporativo, estabilizando el tráfico de alta calidad.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FAF9F6] border border-azul/5">
                    <h5 className="font-mono text-[10px] font-bold uppercase tracking-widest text-azul mb-2">Visión Global</h5>
                    <p className="text-xs text-azul/80 leading-relaxed font-light">
                      Formé parte activa de "Project Talent Factory", el proyecto global de transformación digital de la corporación.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 2: ADN Emprendedor & Visión Visual */}
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-10 border-b border-azul/5 pb-4">
              <div className="p-2 bg-ocre text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-azul uppercase tracking-tight">
                🚀 ADN Emprendedor & Visión Visual
              </h3>
            </div>

            <p className="font-serif italic text-base text-azul/80 max-w-3xl mb-8 leading-relaxed">
              "Porque para asesorar a un negocio, primero hay que haber estado ahí."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* E-commerce & Retail Propio */}
              <div className="p-6 border border-azul/10 bg-white hover:border-ocre transition-all duration-300 relative">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-ocre" />
                <h4 className="font-serif text-xl font-bold text-azul mb-2">
                  E-commerce & Retail Propio
                </h4>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold mb-4">
                  Krizia Home
                </p>
                <p className="text-xs text-azul/80 leading-relaxed font-light">
                  Creé y gestioné integralmente mi propia tienda de diseño y decoración, lo que me dio el "barro de la cancha" para entender el día a día de un e-commerce: desde el desarrollo técnico y el stock, hasta la experiencia de unboxing y fidelización.
                </p>
              </div>

              {/* Dirección Visual */}
              <div className="p-6 border border-azul/10 bg-white hover:border-ocre transition-all duration-300 relative">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-ocre" />
                <h4 className="font-serif text-xl font-bold text-azul mb-2">
                  Dirección Visual
                </h4>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold mb-4">
                  Estudio de Fotografía
                </p>
                <p className="text-xs text-azul/80 leading-relaxed font-light">
                  Fundé mi propio estudio fotográfico, donde entreno mi ojo estético a diario. Esta faceta me permite garantizar que las estrategias de marketing que diseño tengan una identidad visual impecable, premium y coherente.
                </p>
              </div>

              {/* Impulso a Emprendedores */}
              <div className="p-6 border border-azul/10 bg-white hover:border-ocre transition-all duration-300 relative">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-ocre" />
                <h4 className="font-serif text-xl font-bold text-azul mb-2">
                  Impulso a Emprendedores
                </h4>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold mb-4">
                  Asesoramiento & Mentoría
                </p>
                <p className="text-xs text-azul/80 leading-relaxed font-light">
                  Traduzco toda mi experiencia corporativa en asesoramiento práctico para proyectos que están naciendo. Los ayudo a fundar bases sólidas, ordenar su comunicación y validar sus ideas de negocio sin perder tiempo ni presupuesto.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
