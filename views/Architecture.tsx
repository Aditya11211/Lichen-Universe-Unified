import React from 'react';
import { RUST_SNIPPET_BCH, RUST_SNIPPET_TRIE, MODULES } from '../constants';
import { CodeViewer } from '../components/CodeViewer';

export const Architecture: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-slate-700 pb-4">Architecture du Système</h2>
        <p className="text-slate-400">
            Lichen OS remplace les primitives traditionnelles (Linux, SQL) par une architecture optimisée pour les flux cognitifs massifs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-lichen-400 mb-4">Modules Principaux</h3>
            <div className="bg-void-900 rounded-lg border border-slate-700 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-void-950 text-slate-300">
                        <tr>
                            <th className="p-4 font-mono text-xs uppercase tracking-wider">Module</th>
                            <th className="p-4 font-mono text-xs uppercase tracking-wider">Langage</th>
                            <th className="p-4 font-mono text-xs uppercase tracking-wider">Statut</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {MODULES.map((mod) => (
                            <tr key={mod.name} className="hover:bg-void-800/50 transition-colors">
                                <td className="p-4 font-mono text-sm text-cyan-300">{mod.name}</td>
                                <td className="p-4 text-sm text-slate-400">{mod.lang}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                                        mod.status === 'Stable' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'
                                    }`}>
                                        {mod.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="bg-void-900 p-6 rounded-lg border border-slate-700 h-fit">
            <h3 className="text-lg font-bold text-white mb-3">Vision Globale</h3>
            <ul className="space-y-3 text-sm text-slate-400 list-disc list-inside">
                <li>Remplacement de SHA-256 par <strong>S2 Geometry</strong> pour les seeds géographiques.</li>
                <li>Correction d'erreurs via <strong>BCH Hiérarchique</strong>.</li>
                <li>Indexation en <strong>Trie Fractal</strong> pour des requêtes O(1).</li>
            </ul>
        </div>
      </div>

      <div className="space-y-12">
        <div>
            <h3 className="text-2xl font-bold text-white mb-2">BCH Hiérarchique (FC-496)</h3>
            <p className="text-slate-400 mb-4">Correction d'erreurs parallèle sur 16 blocs de 31 bits.</p>
            <CodeViewer snippet={RUST_SNIPPET_BCH} />
        </div>
        
        <div>
            <h3 className="text-2xl font-bold text-white mb-2">Moteur HSE (Trie Fractal)</h3>
            <p className="text-slate-400 mb-4">Structure de données fondamentale pour l'indexation spatio-temporelle.</p>
            <CodeViewer snippet={RUST_SNIPPET_TRIE} />
        </div>
      </div>
    </div>
  );
};