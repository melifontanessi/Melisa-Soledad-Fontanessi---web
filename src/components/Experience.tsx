import React from 'react';

export default function Experience() {
  const cases = [
    {
      title: 'ExpoFarma20',
      desc: 'Creación y organización integral del evento para más de 2.500 asistentes del sector farmacéutico.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Marketing Droguería 20 de Junio',
      desc: 'Creación del área de marketing desde cero. Estrategias, branding, e-commerce y eventos.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Siempre Bien',
      desc: 'Desarrollo e implementación del marketplace. Estrategia digital y comunicación.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Meli & Ma',
      desc: 'Creación de marca, identidad visual y packaging para línea de productos.',
      image: 'https://images.unsplash.com/photo-1531223908832-4b578017551b?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="casos" className="py-20 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#84CC16] block mb-4">
            ESTRATEGIAS QUE SE TRANSFORMARON EN RESULTADOS
          </span>
          <h2 className="font-serif text-3xl md:text-[38px] font-black leading-[1.15] text-azul tracking-tight">
            Algunos desafíos que resolví.
          </h2>
        </div>

        {/* 4-column Case Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-sans text-sm font-bold text-azul mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-light mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Link */}
                <a 
                  href="#contacto"
                  className="inline-flex items-center text-[11px] font-extrabold uppercase tracking-wider text-[#84CC16] hover:text-[#70AD12] transition-colors mt-auto"
                >
                  Ver caso completo <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
