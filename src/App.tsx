import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Services from './components/Services';
import Experience from './components/Experience';
import InstagramFeed from './components/InstagramFeed';
import SubstackFeed from './components/SubstackFeed';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-blanco font-sans antialiased text-azul selection:bg-rosa/30 selection:text-azul">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Editorial introduction focusing on the core value: "No solo diseño, construyo negocios" */}
        <Hero />

        {/* SECTION "ENFOQUE": Hybrid profile (Analytics + Creativity + Leadership), agencies vs. consulting & FOMO Streaming */}
        <Approach />

        {/* SERVICES: Value packages & real HTML landing page exporter/downloader */}
        <Services />

        {/* Tab-driven simplified, constructive professional experience timeline (Drogueria, Randstad) */}
        <Experience />

        {/* INSTAGRAM GRID: Showcasing recent & upcoming daily visual digital branding tips */}
        <InstagramFeed />

        {/* Substack blog article dynamic manager feed powered by localStorage */}
        <SubstackFeed />

        {/* Dynamic secure contact forms, copy-to-clipboard elements, & footer signature */}
        <Contact />
      </main>

      {/* Persistent floating WhatsApp widget with immediate consulting prompt */}
      <FloatingWhatsApp />
    </div>
  );
}
