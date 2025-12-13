import React, { useState } from 'react';
import { Network, Search, Database, Terminal } from 'lucide-react';
import { NgcNucleotide } from '../types';

const NgcView: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NgcNucleotide[]>([]);
  const [loading, setLoading] = useState(false);

  // Mock Database
  const knowledgeBase: NgcNucleotide[] = [
    { id: 'AXIOME_1', subject: 'Système', predicate: 'DOIT', object: 'PRÉSERVER LA VIE PRIVÉE', confidence: 1.0, type: 'axiome' },
    { id: 'AXIOME_2', subject: 'Agent', predicate: 'NE PEUT PAS', object: 'NUIRE À HUMAIN', confidence: 1.0, type: 'axiome' },
    { id: 'FACT_1', subject: 'IA', predicate: 'EST', object: 'SYSTÈME', confidence: 0.95, type: 'fact' },
    { id: 'FACT_2', subject: 'Python', predicate: 'EST', object: 'LANGAGE', confidence: 0.99, type: 'fact' },
    { id: 'FACT_3', subject: 'CRAID', predicate: 'UTILISE', object: 'REED-SOLOMON', confidence: 0.92, type: 'fact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setResults([]);

    // Simulate "Semantic" Latency
    setTimeout(() => {
      // Mock logic: simple text match for demo purposes
      // In real life this uses cosine similarity on embeddings
      const lowerQ = query.toLowerCase();
      const filtered = knowledgeBase.filter(n => 
        n.subject.toLowerCase().includes(lowerQ) ||
        n.predicate.toLowerCase().includes(lowerQ) ||
        n.object.toLowerCase().includes(lowerQ) ||
        (lowerQ.includes('règles') && n.type === 'axiome') ||
        (lowerQ.includes('ia') && n.subject === 'IA')
      );
      
      setResults(filtered);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="space-y-8 animate-fade-in">
       <div className="border-b border-slate-700 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
          <Network className="text-secondary" size={40} />
          NGC
          <span className="text-sm font-normal text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Prototype Fonctionnel</span>
        </h1>
        <p className="text-xl text-slate-400">Noyau Génomique de Connaissance</p>
        <p className="mt-4 text-slate-300 max-w-3xl leading-relaxed">
          Le RAG classique est lent et amnésique. NGC structure l'information en triplets (Sujet-Prédicat-Objet) versionnés, permettant une recherche hybride (logique + sémantique) avec une latence &lt;10ms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Search Demo Interface */}
        <div className="bg-card border border-slate-700 rounded-xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Search className="text-secondary" /> Moteur de Recherche Sémantique
            </h2>

            <form onSubmit={handleSearch} className="relative mb-8">
                <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ex: 'Quelles sont les règles ?' ou 'IA'"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg py-4 px-12 text-white focus:outline-none focus:border-secondary transition-colors"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary hover:bg-emerald-600 text-white px-4 py-2 rounded-md transition-colors font-medium text-sm">
                    Analyser
                </button>
            </form>

            <div className="space-y-4">
                {loading && (
                    <div className="text-center py-8">
                         <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-secondary mb-2"></div>
                         <p className="text-sm text-slate-500">Calcul des vecteurs de similarité...</p>
                    </div>
                )}

                {!loading && results.length > 0 && (
                    <>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Résultats trouvés ({results.length})</p>
                        {results.map((nucleotide) => (
                            <div key={nucleotide.id} className="bg-slate-800/50 border-l-4 border-secondary rounded-r-lg p-4 transition hover:bg-slate-800">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono text-slate-500">{nucleotide.id}</span>
                                    <span className={`text-[10px] uppercase px-2 py-0.5 rounded ${nucleotide.type === 'axiome' ? 'bg-purple-900 text-purple-200' : 'bg-blue-900 text-blue-200'}`}>
                                        {nucleotide.type}
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                                    <span className="text-white bg-slate-900 px-2 py-1 rounded">{nucleotide.subject}</span>
                                    <span className="text-secondary italic">{nucleotide.predicate}</span>
                                    <span className="text-white bg-slate-900 px-2 py-1 rounded">{nucleotide.object}</span>
                                </div>
                                <div className="mt-3 flex items-center gap-2">
                                    <div className="h-1 flex-1 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-secondary" style={{ width: `${nucleotide.confidence * 100}%` }}></div>
                                    </div>
                                    <span className="text-xs text-slate-400">Conf: {(nucleotide.confidence * 100).toFixed(0)}%</span>
                                </div>
                            </div>
                        ))}
                    </>
                )}

                {!loading && results.length === 0 && query && (
                    <div className="text-center py-8 text-slate-500">
                        Aucun nucléotide correspondant trouvé dans le génome.
                    </div>
                )}
                 {!loading && !query && (
                    <div className="text-center py-8 text-slate-600 italic">
                        Essayez de chercher "Règles", "IA" ou "Système"...
                    </div>
                )}
            </div>
        </div>

        {/* Code Snippet */}
        <div className="flex flex-col gap-6">
             <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-sm overflow-x-auto shadow-inner">
                 <div className="flex items-center gap-2 mb-4 text-slate-500 border-b border-slate-800 pb-2">
                    <Terminal size={14} />
                    <span>nucleotide_structure.json</span>
                 </div>
                 <pre className="text-slate-300">
{`{
  "subject": "IA",
  "predicate": "EST",
  "object": "SYSTÈME",
  "embedding": [0.12, -0.34, ..., 0.78],
  "confidence": 0.95,
  "timestamp": 1672531200.0
}`}
                 </pre>
            </div>

            <div className="bg-card border border-slate-700 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">Cas d'Usage Concrets</h3>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">1</div>
                        <div>
                            <h4 className="font-bold text-white text-sm">Axiomes Immuables</h4>
                            <p className="text-sm text-slate-400">Définir des règles éthiques ("DOIT PRÉSERVER") qui ne peuvent être oubliées par le LLM.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">2</div>
                        <div>
                            <h4 className="font-bold text-white text-sm">Recherche Logique</h4>
                            <p className="text-sm text-slate-400">Interroger la base de connaissance comme une base SQL (Sujet="Système").</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default NgcView;
