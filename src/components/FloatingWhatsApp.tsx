import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Show a gentle prompt after 3 seconds to catch user's attention
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = 'https://api.whatsapp.com/send?phone=5493424481854&text=Hola%20Melisa,%20vi%20tu%20portfolio%20y%20me%20interesar%C3%ADa%20agendar%20una%20consultor%C3%ADa%20estrat%C3%A9gica.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Interactive Prompt Bubble */}
      {showPrompt && (
        <div className="bg-azul text-white p-4 border border-white/10 shadow-xl max-w-xs animate-fadeIn pointer-events-auto flex flex-col gap-2 relative">
          <button
            onClick={() => setShowPrompt(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-rosa font-mono text-[9px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-ocre fill-ocre" />
            CONSULTORÍA INMEDIATA
          </div>
          <p className="text-xs font-light text-slate-200 leading-relaxed pr-4">
            ¿Tenés dudas sobre cómo estructurar el área de marketing de tu empresa? Escribime directo por WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowPrompt(false)}
            className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C68E4B] hover:text-white transition-colors self-start border-b border-[#C68E4B] pb-0.5 mt-1"
          >
            Escribir ahora →
          </a>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all relative group"
        title="Contactar por WhatsApp"
        id="whatsapp-floating-button"
      >
        {/* Customized high-quality custom WhatsApp SVG */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.848.502 3.578 1.378 5.067L2 22l5.09-.1.332.195a9.92 9.92 0 0 0 4.582 1.135C17.524 23.23 22 18.75 22 13.226 22 7.625 17.53 2 12.004 2zm5.293 14.88c-.232.652-1.345 1.258-1.85 1.32-.455.056-.995.1-3.003-.732-2.566-1.064-4.22-3.676-4.348-3.845-.128-.17-1.037-1.383-1.037-2.637 0-1.254.64-1.87.87-2.122.23-.25.5-.314.667-.314.168 0 .337 0 .484.007.153.007.36-.057.562.434.204.498.702 1.706.762 1.827.06.12.1.262.02.427-.08.165-.12.268-.24.408-.12.14-.253.313-.36.42-.12.12-.246.252-.106.495.14.24.623 1.026 1.334 1.66.917.817 1.69 1.07 1.933 1.19.24.12.383.1.526-.06.142-.162.62-.723.785-.97.164-.247.33-.205.558-.12.228.085 1.45.684 1.703.81.253.128.42.19.48.297.06.107.06.623-.172 1.275z" />
        </svg>

        {/* Pulse effect rings */}
        <span className="absolute -inset-1 rounded-none border border-[#25D366]/40 animate-ping -z-10 opacity-75" />
      </a>

    </div>
  );
}
