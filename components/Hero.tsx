import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, ShieldCheck, GitBranch } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in pb-10">
      <div className="text-center space-y-6 py-12">
        <div className="inline-block px-4 py-1.5 bg-slate-800 text-primary rounded-full text-sm font-semibold border border-slate-700 mb-4">
           Disponible pour de nouvelles opportunités
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          Architecte <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Système Cognitif</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Je conçois des systèmes d'IA qui survivent aux pannes, s'auto-organisent et respectent une éthique mathématique.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a href="mailto:bryan.ouellet@domaine.com" className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-primary/25">
            Me Contacter
          </a>
          <a href="https://github.com/quantum-lichen" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-bold transition-all border border-slate-700">
            Voir GitHub
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/craid" className="group relative bg-card hover:bg-slate-800 border border-slate-700 rounded-xl p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
          <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="text-primary -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">CRAID</h3>
          <p className="text-sm font-mono text-primary mb-3">Stockage Résilient</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Le premier système de stockage distribué qui utilise l'IA pour reconstruire ses propres données manquantes après une panne critique.
          </p>
        </Link>

        <Link to="/trpu" className="group relative bg-card hover:bg-slate-800 border border-slate-700 rounded-xl p-8 transition-all hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
           <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="text-accent -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
            <Cpu size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">TRPU</h3>
          <p className="text-sm font-mono text-accent mb-3">Théorie Cognitive</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Une équation mathématique garantissant qu'une IA reste stable et éthique via une résonance harmonique perpétuelle.
          </p>
        </Link>

        <Link to="/ngc" className="group relative bg-card hover:bg-slate-800 border border-slate-700 rounded-xl p-8 transition-all hover:border-secondary/50 hover:shadow-2xl hover:shadow-secondary/10">
           <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="text-secondary -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
          <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
            <GitBranch size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">NGC</h3>
          <p className="text-sm font-mono text-secondary mb-3">Base de Connaissance</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Noyau génomique structurant la connaissance en triplets sémantiques immuables pour une recherche instantanée et précise.
          </p>
        </Link>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Prêt à investir dans l'IA résiliente ?</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Mes technologies réduisent les coûts d'infrastructure de 40% tout en garantissant une disponibilité de 100% des données critiques.
        </p>
        <button className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-3 rounded-full font-bold transition-colors">
            Demander une Démo Technique
        </button>
      </div>
    </div>
  );
};

export default Hero;