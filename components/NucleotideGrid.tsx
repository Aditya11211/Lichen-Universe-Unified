import React from 'react';
import { Nucleotide } from '../types';
import { Database, Hexagon } from 'lucide-react';

interface NucleotideGridProps {
    memory: Nucleotide[];
}

export const NucleotideGrid: React.FC<NucleotideGridProps> = ({ memory }) => {
    return (
        <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-4 shadow-lg backdrop-blur-sm flex flex-col h-full">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Database size={16} /> Nucleotide Storage (NGC)
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 overflow-y-auto max-h-[200px] scrollbar-thin">
                {memory.map((nuc) => (
                    <div key={nuc.id} className="bg-slate-950/50 border border-slate-800 p-2 rounded hover:border-cyan-500/30 transition-all group">
                        <div className="flex justify-between items-center mb-1">
                            <Hexagon size={12} className={
                                nuc.niche === 'LOGOS' ? 'text-blue-400' :
                                nuc.niche === 'PATHOS' ? 'text-pink-400' :
                                'text-amber-400'
                            } />
                            <span className="text-[10px] text-slate-600">{nuc.niche}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 truncate font-mono" title={nuc.id}>
                            {nuc.id.substring(0, 8)}...
                        </div>
                        <div className="text-[9px] text-slate-600 mt-1">
                            H={nuc.epigenetics.source_confidence.toFixed(2)}
                        </div>
                    </div>
                ))}
                {memory.length === 0 && (
                    <div className="col-span-full flex flex-col items-center justify-center py-8 text-slate-600">
                        <Hexagon size={24} className="mb-2 opacity-20" />
                        <span className="text-xs">Memory Empty</span>
                    </div>
                )}
            </div>
        </div>
    );
};