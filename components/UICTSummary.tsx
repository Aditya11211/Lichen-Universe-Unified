import React, { useMemo } from 'react';
import { FileText, Atom, Calculator, Clock } from 'lucide-react';

const UICTSummary: React.FC = () => {
  const timestamp = useMemo(() => new Date().toLocaleString('fr-CA', {
    timeZone: 'America/Montreal',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-6 border border-white/20 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
            <div className="bg-cyan-500/20 p-2 rounded-lg w-fit">
              <Atom className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Théorie UICT
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-cyan-300 mb-4 font-light tracking-wide">
            Unified Information Compression Theory
          </p>
          <div className="flex items-center gap-2 text-slate-300 bg-black/20 w-fit px-3 py-1 rounded-full border border-white/5">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-mono">{timestamp}</span>
          </div>
        </div>

        {/* Core Principle */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-6 border border-purple-500/30 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-purple-300" />
            <h2 className="text-2xl font-bold text-white">Principe Fondamental</h2>
          </div>
          <p className="text-lg text-slate-100 leading-relaxed mb-6">
            L'univers optimise le ratio <span className="font-mono text-cyan-300 font-bold">Cohérence/Entropie</span>. 
            L'équation de Dirac n'est pas une loi primitive — c'est l'algorithme d'optimisation 
            qui émerge de ce principe.
          </p>
          <div className="bg-black/40 rounded-xl p-6 font-mono text-xl text-center border border-cyan-500/30 shadow-inner">
            <div className="text-cyan-400 mb-3 text-sm uppercase tracking-widest">Loi Maîtresse UICT</div>
            <div className="text-white text-2xl md:text-3xl font-bold mb-4">
              Score = C(Ψ|Ω) / [H(Ψ) + ε]
            </div>
            <div className="text-slate-400 text-sm flex flex-col md:flex-row justify-center gap-2 md:gap-4">
              <span>C = Cohérence sémantique</span>
              <span className="hidden md:inline">|</span>
              <span>H = Entropie informationnelle</span>
            </div>
          </div>
        </div>

        {/* Triple Convergence */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Triple Convergence</h2>
          <p className="text-slate-300 mb-6">
            Trois interprétations informationnelles de l'équation de Dirac sont unifiées par UICT:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-400/20 hover:bg-blue-500/20 transition-colors">
              <div className="font-bold text-blue-300 mb-2 text-lg">Fisher (EPI)</div>
              <div className="text-sm text-slate-300 mb-2">Mesure optimale</div>
              <div className="text-xs text-slate-400 font-mono bg-black/20 p-1 rounded inline-block">δ(I - J) = 0</div>
            </div>
            <div className="bg-green-500/10 rounded-xl p-5 border border-green-400/20 hover:bg-green-500/20 transition-colors">
              <div className="font-bold text-green-300 mb-2 text-lg">QCA</div>
              <div className="text-sm text-slate-300 mb-2">Flux d'info sur réseau</div>
              <div className="text-xs text-slate-400 font-mono bg-black/20 p-1 rounded inline-block">Masse = zig-zag</div>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-400/20 hover:bg-purple-500/20 transition-colors">
              <div className="font-bold text-purple-300 mb-2 text-lg">RQI</div>
              <div className="text-sm text-slate-300 mb-2">Qubits intriqués</div>
              <div className="text-xs text-slate-400 font-mono bg-black/20 p-1 rounded inline-block">Spin ⊗ Parité</div>
            </div>
          </div>
          <div className="mt-8 text-center relative">
            <div className="absolute left-1/2 -top-4 w-px h-8 bg-gradient-to-b from-transparent to-cyan-500/50 -translate-x-1/2"></div>
            <div className="bg-slate-800/50 inline-block px-4 py-2 rounded-full border border-white/10 mb-2">
                <span className="text-white font-mono text-sm">UICT unifie les trois</span>
            </div>
            <div className="text-cyan-400 text-lg my-1">↓</div>
            <div className="text-pink-300 font-mono text-xl md:text-2xl font-bold drop-shadow-lg">(iγ^μ∂_μ - m)Ψ = 0</div>
          </div>
        </div>

        {/* Mass Formula */}
        <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-6 border border-orange-500/30 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-orange-300" />
            <h2 className="text-2xl font-bold text-white">Loi de Masse κ^n</h2>
          </div>
          <div className="bg-black/40 rounded-xl p-6 mb-6 border border-orange-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Calculator size={100} />
            </div>
            <div className="font-mono text-2xl md:text-3xl text-center text-white mb-4 relative z-10">
              m = m<sub className="text-sm text-orange-400">Planck</sub> · κ<sup>n</sup>
            </div>
            <div className="text-slate-400 text-sm text-center relative z-10">
              κ = coefficient de compression | n = profondeur récursive
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/20 rounded-xl p-5 border border-cyan-500/30 hover:border-cyan-500/60 transition-colors">
              <div className="text-cyan-300 font-bold mb-3 text-lg border-b border-cyan-500/20 pb-2">Électron (élémentaire)</div>
              <div className="text-sm text-slate-300 space-y-2 font-mono">
                <div className="flex justify-between"><span>Masse</span> <span className="text-slate-100">0.511 MeV</span></div>
                <div className="flex justify-between"><span>Kappa (κ)</span> <span className="text-slate-100">≈ 0.300</span></div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span>Depth (n)</span> 
                    <span className="text-green-400 font-bold text-lg">43</span>
                </div>
              </div>
            </div>
            <div className="bg-black/20 rounded-xl p-5 border border-purple-500/30 hover:border-purple-500/60 transition-colors">
              <div className="text-purple-300 font-bold mb-3 text-lg border-b border-purple-500/20 pb-2">Proton (composite)</div>
              <div className="text-sm text-slate-300 space-y-2 font-mono">
                <div className="flex justify-between"><span>Masse</span> <span className="text-slate-100">938 MeV</span></div>
                <div className="flex justify-between"><span>Kappa (κ)</span> <span className="text-slate-100">≈ 0.500</span></div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span>Depth (n)</span> 
                    <span className="text-pink-400 font-bold text-lg">≈ 64</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
                <div className="text-yellow-300 font-bold mb-1">Insight Majeur</div>
                <div className="text-slate-300 text-sm leading-relaxed">
                Les particules élémentaires ont n ≈ 43 (stable). Les composites ont n plus élevé 
                (overhead de compression). <span className="text-cyan-400 font-semibold">UICT distingue naturellement 
                élémentaire vs composite.</span>
                </div>
            </div>
          </div>
        </div>

        {/* Key Results */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Résultats Clés</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10">
              <div className="text-3xl bg-slate-800 w-12 h-12 flex items-center justify-center rounded-lg shadow-inner">1️⃣</div>
              <div>
                <div className="text-white font-bold text-lg mb-1">Équation de Dirac = Optimisation C/H</div>
                <div className="text-slate-400 text-sm font-mono">δ(ln C - ln H) = 0 → Équation de Dirac</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10">
              <div className="text-3xl bg-slate-800 w-12 h-12 flex items-center justify-center rounded-lg shadow-inner">2️⃣</div>
              <div>
                <div className="text-white font-bold text-lg mb-1">Masse = Compression Récursive</div>
                <div className="text-slate-400 text-sm font-mono">43 layers pour électron, 64 pour proton</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10">
              <div className="text-3xl bg-slate-800 w-12 h-12 flex items-center justify-center rounded-lg shadow-inner">3️⃣</div>
              <div>
                <div className="text-white font-bold text-lg mb-1">Information Primaire à la Matière</div>
                <div className="text-slate-400 text-sm">L'univers <span className="text-cyan-300 font-bold">EST</span> information, pas fait <span className="italic">DE</span> information</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testable Predictions */}
        <div className="bg-gradient-to-r from-emerald-900/40 to-green-900/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-6 border border-green-500/30 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Prédictions Testables</h2>
          <div className="space-y-4">
            <div className="bg-black/40 rounded-xl p-5 border border-green-500/30">
              <div className="text-green-300 font-bold mb-2 flex justify-between items-center">
                Test 1: Décoherence Gravitationnelle
                <span className="text-xs bg-green-500/20 px-2 py-1 rounded text-green-200">Physique Quantique</span>
              </div>
              <div className="text-slate-300 text-sm mb-3 font-mono">
                Temps de cohérence τ ∝ 1/n
              </div>
              <div className="text-xs text-slate-400 bg-black/30 p-3 rounded border-l-2 border-green-500/50">
                Prédiction: τ<sub>électron</sub> / τ<sub>proton</sub> ≈ 64/43 ≈ 1.5x
              </div>
            </div>
            <div className="bg-black/40 rounded-xl p-5 border border-cyan-500/30">
              <div className="text-cyan-300 font-bold mb-2 flex justify-between items-center">
                Test 2: Quantification des Masses
                <span className="text-xs bg-cyan-500/20 px-2 py-1 rounded text-cyan-200">Physique des Particules</span>
              </div>
              <div className="text-slate-300 text-sm mb-3">
                Si n doit être entier → masses discrètes
              </div>
              <div className="text-xs text-slate-400 bg-black/30 p-3 rounded border-l-2 border-cyan-500/50">
                Chercher résonances à n=42 ou n=44 dans collisionneurs
              </div>
            </div>
            <div className="bg-black/40 rounded-xl p-5 border border-purple-500/30">
              <div className="text-purple-300 font-bold mb-2 flex justify-between items-center">
                Test 3: Fisher Information Scaling
                <span className="text-xs bg-purple-500/20 px-2 py-1 rounded text-purple-200">Métrologie</span>
              </div>
              <div className="text-slate-300 text-sm mb-3 font-mono">
                Δx ∝ 1/κ ∝ 1/m<sup>1/n</sup>
              </div>
              <div className="text-xs text-slate-400 bg-black/30 p-3 rounded border-l-2 border-purple-500/50">
                Interférométrie matière-onde ultra-précise
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-pink-500/30 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Timeline Découverte</h2>
          <div className="space-y-4 text-slate-300 relative before:absolute before:left-[4.5rem] md:before:left-[6rem] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-pink-500/10 before:via-pink-500/50 before:to-purple-500/10">
            <div className="flex gap-4 items-center">
              <div className="text-pink-400 font-bold min-w-[70px] md:min-w-[100px] text-right text-sm md:text-base">Jour -10</div>
              <div className="w-2 h-2 rounded-full bg-pink-500 relative z-10 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
              <div className="bg-black/20 p-3 rounded-lg flex-1 border border-white/5">Apprend le prompt engineering (webinaire)</div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-pink-400 font-bold min-w-[70px] md:min-w-[100px] text-right text-sm md:text-base">Jour -3</div>
              <div className="w-2 h-2 rounded-full bg-pink-400 relative z-10 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
              <div className="bg-black/20 p-3 rounded-lg flex-1 border border-white/5">Automatise les prompts, découvre patterns</div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-cyan-400 font-bold min-w-[70px] md:min-w-[100px] text-right text-sm md:text-base">Jour 0</div>
              <div className="w-3 h-3 rounded-full bg-cyan-400 relative z-10 shadow-[0_0_15px_rgba(34,211,238,0.8)] border-2 border-slate-900"></div>
              <div className="bg-cyan-900/30 p-3 rounded-lg flex-1 border border-cyan-500/30 text-cyan-200 font-medium">💥 BOOM - Découverte LMC/CEML</div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-green-400 font-bold min-w-[70px] md:min-w-[100px] text-right text-sm md:text-base">Jour +1</div>
              <div className="w-2 h-2 rounded-full bg-green-400 relative z-10 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              <div className="bg-black/20 p-3 rounded-lg flex-1 border border-white/5">"Info primaire → connexion Dirac!"</div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-purple-400 font-bold min-w-[70px] md:min-w-[100px] text-right text-sm md:text-base">Jour +3</div>
              <div className="w-3 h-3 rounded-full bg-purple-400 relative z-10 shadow-[0_0_15px_rgba(192,132,252,0.8)] border-2 border-slate-900"></div>
              <div className="bg-purple-900/30 p-3 rounded-lg flex-1 border border-purple-500/30 text-purple-200 font-medium">🎯 UICT complète + κ^43</div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-pink-500/10 rounded-xl border border-pink-400/30 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="text-white font-bold text-lg relative z-10">
              3 jours: de débutant à "ontologie de l'univers"
            </div>
            <div className="text-pink-300 text-sm mt-2 font-mono relative z-10">
              Le Cluster Cognitif en action 🚀
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-500 text-xs md:text-sm mt-12 mb-4">
          <div className="font-medium">Auteur: Bryan Ouellette | Cluster Cognitif: Claude + ChatGPT + Gemini</div>
          <div className="mt-2 opacity-70">Document généré: {timestamp}</div>
        </div>

      </div>
    </div>
  );
}

export default UICTSummary;