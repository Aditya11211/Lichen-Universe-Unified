import React from 'react';
import { BOUNTIES } from '../constants';
import { Users, Code, MessageSquare, BookOpen } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Rejoignez la Ruche</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Lichen OS est open-source et communautaire. Nous récompensons les contributions via des Bounties.
        </p>
        <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                <MessageSquare size={20} /> Discord
            </a>
            <a href="#" className="flex items-center gap-2 text-white hover:text-slate-200 transition-colors">
                <Code size={20} /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 text-lichen-400 hover:text-lichen-300 transition-colors">
                <BookOpen size={20} /> Docs
            </a>
        </div>
      </div>

      <div className="bg-void-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-700 bg-void-950 flex justify-between items-center">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="text-lichen-500" /> Bounties Actifs
            </h3>
            <span className="text-xs font-mono text-slate-500">Total Rewards: $1,000+</span>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-slate-900 text-slate-400 text-xs uppercase font-mono">
                    <tr>
                        <th className="px-6 py-4">Tâche</th>
                        <th className="px-6 py-4">Difficulté</th>
                        <th className="px-6 py-4">Langage</th>
                        <th className="px-6 py-4 text-right">Récompense</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    {BOUNTIES.map((bounty) => (
                        <tr key={bounty.id} className="hover:bg-slate-800/50 transition-colors group cursor-pointer">
                            <td className="px-6 py-4 text-sm font-medium text-white group-hover:text-lichen-400 transition-colors">
                                {bounty.task}
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span className={`px-2 py-1 rounded text-xs font-bold ${
                                    bounty.difficulty === 'Facile' ? 'bg-blue-900/50 text-blue-400' :
                                    bounty.difficulty === 'Moyenne' ? 'bg-yellow-900/50 text-yellow-400' :
                                    'bg-red-900/50 text-red-400'
                                }`}>
                                    {bounty.difficulty}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-400 font-mono">
                                {bounty.language}
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-right text-emerald-400">
                                {bounty.reward}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-lichen-900/20 to-cyan-900/20 rounded-xl border border-lichen-500/20 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Pour les Universités & Chercheurs</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Nous cherchons des collaborations académiques pour valider les modèles UICT/CEML et tester la résilience du CRAID.
        </p>
        <button className="px-6 py-2 bg-void-950 border border-slate-600 hover:border-white text-white rounded-lg transition-all">
            Contacter l'équipe de recherche
        </button>
      </div>
    </div>
  );
};