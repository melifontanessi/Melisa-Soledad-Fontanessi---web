import React, { useState, useEffect } from 'react';
import { INITIAL_ARTICLES } from '../data';
import { SubstackArticle } from '../types';
import { 
  Rss, 
  ExternalLink, 
  Plus, 
  X, 
  Search, 
  Trash2, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  RotateCcw 
} from 'lucide-react';

export default function SubstackFeed() {
  const [articles, setArticles] = useState<SubstackArticle[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Form Fields State
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('Marketing');
  const [coverImage, setCoverImage] = useState('');
  const [readTime, setReadTime] = useState('5 min de lectura');

  // Load articles from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('melisa_substack_articles_v3');
    if (saved) {
      try {
        setArticles(JSON.parse(saved));
      } catch (e) {
        setArticles(INITIAL_ARTICLES);
      }
    } else {
      setArticles(INITIAL_ARTICLES);
      localStorage.setItem('melisa_substack_articles_v3', JSON.stringify(INITIAL_ARTICLES));
    }
  }, []);

  // Save helper
  const saveArticles = (newArticles: SubstackArticle[]) => {
    setArticles(newArticles);
    localStorage.setItem('melisa_substack_articles_v3', JSON.stringify(newArticles));
  };

  // Preset Images to make custom uploads look incredible even if they don't have an image URL
  const presetImages = [
    'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800&q=80', // writing/creative
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', // analytics/marketing
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80', // technology/digital
    'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80'  // desk/branding
  ];

  // Add Article handler
  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !excerpt || !link) {
      alert('Por favor, completa los campos requeridos (Título, Resumen y Enlace).');
      return;
    }

    // Default image if empty
    const finalImage = coverImage.trim() !== '' 
      ? coverImage 
      : presetImages[Math.floor(Math.random() * presetImages.length)];

    // Clean Substack URL or set fallback
    const finalLink = link.startsWith('http') ? link : `https://${link}`;

    const newArticle: SubstackArticle = {
      id: `custom_art_${Date.now()}`,
      title,
      excerpt,
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
      coverImage: finalImage,
      readTime: readTime.includes('lectura') ? readTime : `${readTime} min de lectura`,
      link: finalLink,
      category: category.trim() !== '' ? category : 'Contenido'
    };

    const updatedArticles = [newArticle, ...articles];
    saveArticles(updatedArticles);

    // Reset Form & show success
    setTitle('');
    setExcerpt('');
    setLink('');
    setCategory('Marketing');
    setCoverImage('');
    setReadTime('5 min de lectura');
    setShowForm(false);
    
    setSuccessMsg('¡Publicación cargada con éxito! Ya se visualiza en tu feed.');
    setTimeout(() => setSuccessMsg(''), 5000);
  };

  // Delete handler
  const handleDeleteArticle = (id: string) => {
    if (confirm('¿Estás segura de que quieres eliminar esta publicación del sitio web?')) {
      const updated = articles.filter(art => art.id !== id);
      saveArticles(updated);
    }
  };

  // Reset to Default handler
  const handleResetToDefaults = () => {
    if (confirm('¿Deseas restablecer el feed con los artículos por defecto del CV?')) {
      saveArticles(INITIAL_ARTICLES);
    }
  };

  // Filtered list based on Search
  const filteredArticles = articles.filter(art => {
    const q = searchQuery.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.excerpt.toLowerCase().includes(q) ||
      art.category.toLowerCase().includes(q)
    );
  });

  return (
    <section id="substack" className="py-24 bg-blanco border-b border-azul/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header and Branding */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ocre font-bold mb-3 block">CREACIÓN DE CONTENIDO</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-azul tracking-tight mb-4">
              Mi Espacio en Substack
            </h2>
            <p className="font-sans text-sm md:text-base text-azul/80 font-light leading-relaxed">
              Escribo sobre marketing estratégico, branding contemporáneo, e-commerce, tendencias de IA aplicadas a los negocios y aprendizajes prácticos de mi trayectoria. Te invito a explorar mi feed interactivo abajo o a seguirme directamente en mi perfil oficial de Substack.
            </p>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://substack.com/@melifontanessi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#FF6719] hover:bg-[#e05610] text-white font-bold text-[10px] uppercase tracking-widest transition-all cursor-pointer"
            >
              <Rss className="w-4 h-4" />
              Ver todo en Substack
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 px-5 py-3 bg-azul hover:bg-ocre text-white font-bold text-[10px] uppercase tracking-widest transition-all cursor-pointer"
            >
              {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {showForm ? 'Cancelar' : 'Cargar Publicación'}
            </button>
            <button
              onClick={handleResetToDefaults}
              className="inline-flex items-center gap-1.5 px-4 py-3 border border-azul/20 bg-white hover:bg-blanco text-azul hover:text-ocre text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer"
              title="Restablecer artículos iniciales"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer
            </button>
          </div>
        </div>

        {/* Success Alert Banner */}
        {successMsg && (
          <div className="mb-8 p-4 bg-white border border-azul/10 text-emerald-800 flex items-center gap-3 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-azul">{successMsg}</span>
          </div>
        )}

        {/* Collapsible Form for Adding Publication */}
        {showForm && (
          <div className="mb-12 p-6 md:p-8 bg-white border border-azul/10 max-w-2xl mx-auto animate-slideDown">
            <div className="flex items-center justify-between border-b border-azul/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-ocre" />
                <h3 className="font-serif text-lg font-bold text-azul">
                  Cargar Artículo de Substack
                </h3>
              </div>
              <button 
                onClick={() => setShowForm(false)} 
                className="p-1 text-azul/40 hover:text-azul transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddArticle} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest font-mono text-slate-500 mb-1.5">
                  Título del Artículo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Estrategias de posicionamiento SEO para e-commerce"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-azul/20 bg-white focus:outline-hidden focus:border-ocre text-azul text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest font-mono text-slate-500 mb-1.5">
                  Breve Resumen / Introducción <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Escribe un resumen enganchador de 2 o 3 líneas que describa de qué trata esta publicación."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-azul/20 bg-white focus:outline-hidden focus:border-ocre text-azul text-sm transition-all resize-none font-light"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest font-mono text-slate-500 mb-1.5">
                    Categoría / Tag
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Branding, E-commerce, IA"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-azul/20 bg-white focus:outline-hidden focus:border-ocre text-azul text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest font-mono text-slate-500 mb-1.5">
                    Tiempo de Lectura
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 6 min de lectura"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-azul/20 bg-white focus:outline-hidden focus:border-ocre text-azul text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest font-mono text-slate-500 mb-1.5">
                  Enlace de Substack (URL) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://melifontanessi.substack.com/p/mi-articulo"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-azul/20 bg-white focus:outline-hidden focus:border-ocre text-azul text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest font-mono text-slate-500 mb-1.5 flex items-center justify-between">
                  <span>URL de Imagen de Portada</span>
                  <span className="text-[9px] text-slate-400 normal-case">Vacío para auto-generar</span>
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-azul/20 bg-white focus:outline-hidden focus:border-ocre text-azul text-sm transition-all"
                />
              </div>

              <div className="pt-4 border-t border-azul/10 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-azul/20 text-azul/60 hover:bg-blanco text-xs font-semibold rounded-none transition-all cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-azul hover:bg-ocre text-white text-xs font-semibold rounded-none transition-all cursor-pointer"
                >
                  Agregar al Sitio
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Search Bar / Filter controls */}
        <div className="relative max-w-md mb-8">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-azul/40">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Buscar por título, temática o palabra clave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-azul/15 rounded-none focus:outline-hidden focus:border-ocre text-azul text-sm transition-all font-light"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-azul/40 hover:text-azul"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Publications Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                className="group bg-white border border-azul/10 overflow-hidden hover:border-ocre transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Image Cover */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-550"
                    loading="lazy"
                  />
                  
                  {/* Category overlay label */}
                  <span className="absolute top-3 left-3 bg-white border border-azul/10 px-2.5 py-1 text-[9px] font-bold text-azul uppercase tracking-widest shadow-sm">
                    {art.category}
                  </span>

                  {/* Absolute positioning: Delete custom post */}
                  {art.id.startsWith('custom_') && (
                    <button
                      onClick={() => handleDeleteArticle(art.id)}
                      className="absolute top-3 right-3 p-2 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white rounded-none border border-red-200 transition-all shadow-xs cursor-pointer"
                      title="Eliminar artículo"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Info and text */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date and Readtime row */}
                    <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400 font-semibold mb-2.5 uppercase tracking-widest">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {art.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {art.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg md:text-xl font-bold text-azul group-hover:text-ocre transition-colors leading-snug mb-2">
                      {art.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-azul/70 leading-relaxed font-light mb-6 line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  {/* Read Link Button */}
                  <div className="pt-4 border-t border-azul/5">
                    <a
                      href={art.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-azul group-hover:text-ocre transition-all"
                    >
                      Leer en Substack
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center border-2 border-dashed border-azul/10 bg-white">
            <Rss className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-azul">No se encontraron artículos</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto font-light">
              Intenta buscar con otra palabra clave o agrega una nueva publicación a tu feed.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
