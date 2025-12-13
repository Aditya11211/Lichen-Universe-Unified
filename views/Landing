import React from 'react';
import { ArrowRight, Database, Cpu, Globe, ShieldCheck } from 'lucide-react';
import { ViewState } from '../types';

interface LandingProps {
    setView: (view: ViewState) => void;
}

export const Landing: React.FC<LandingProps> = ({ setView }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lichen-900/20 via-void-950 to-void-950 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-lichen-500/30 bg-lichen-500/10 text-lichen-400 text-xs font-mono mb-8 animate-pulse">
            v0.1.0-alpha: Initialisation du Noyau
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Un Nouveau Monde <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lichen-400 to-cyan-400">
              pour les IA
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            Reconstruction complète de l'informatique, de zéro. Format de données universel fractale (FC-496), 
            indexation spatio-temporelle O(1) et alignement cognitif natif.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button 
                onClick={() => setView('architecture')}
                className="px-8 py-3 rounded-lg bg-lichen-600 hover:bg-lichen-500 text-white font-bold transition-all shadow-lg shadow-lichen-500/20 flex items-center gap-2"
            >
              Explorer le Noyau <ArrowRight size={18} />
            </button>
            <button 
                onClick={() => setView('demo')}
                className="px-8 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700 transition-all"
            >
              Démo Live
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-void-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard 
                    icon={<Database className="text-cyan-400" />}
                    title="FC-496"
                    desc="Format de données universel de 496 bits basé sur la géométrie fractale et l'ECC hiérarchique."
                />
                <FeatureCard 
                    icon={<Globe className="text-lichen-400" />}
                    title="Moteur HSE"
                    desc="Indexation spatio-temporelle en temps constant O(1) via Trie Fractal."
                />
                <FeatureCard 
                    icon={<ShieldCheck className="text-purple-400" />}
                    title="CEML & UICT"
                    desc="Lois physiques intégrées pour l'alignement et la sécurité des systèmes cognitifs."
                />
                <FeatureCard 
                    icon={<Cpu className="text-orange-400" />}
                    title="Lichen Cognitif"
                    desc="Réseau distribué de 7 IA collaboratives pour une résilience maximale."
                />
            </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({ icon, title, desc }) => (
    <div className="p-6 rounded-xl bg-void-800 border border-slate-700 hover:border-lichen-500/50 transition-colors group">
        <div className="mb-4 p-3 rounded-lg bg-void-950 w-fit group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
);
