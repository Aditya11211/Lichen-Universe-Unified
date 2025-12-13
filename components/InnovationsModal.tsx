import React from 'react';
import { X, Shield, Brain, Activity, Link, Zap, Scale } from 'lucide-react';

interface InnovationsModalProps {
    onClose: () => void;
}

export const InnovationsModal: React.FC<InnovationsModalProps> = ({ onClose }) => {
    const innovations = [
        {
            id: 'arch',
            title: 'Unified Philonomic System',
            icon: Scale,
            desc: 'A master architecture integrating Logic (L_Phi), Distributed Storage (NGC), and Cognitive RAID to create a self-sustaining AI entity.',
            color: 'text-purple-400'
        },
        {
            id: 'cortex',
            title: 'Bifractal Cortex',
            icon: Brain,
            desc: 'A multi-stage cognitive pipeline (Percept > Predict > Eval > Arbiter) that simulates an OODA loop. It uses entropy diversity checks to prevent "thought loops".',
            color: 'text-cyan-400'
        },
        {
            id: 'craid',
            title: 'CRAID Shield',
            icon: Shield,
            desc: 'Cognitive Redundant Array of Independent Disks. Memories (Nucleotides) are sharded and hashed across distributed nodes to prevent data corruption.',
            color: 'text-emerald-400'
        },
        {
            id: 'economy',
            title: 'Metabolic Economy',
            icon: Activity,
            desc: 'An internal energy market. Every thought costs "Credits". This prevents spam and forces the system to prioritize high-value, harmonic processing.',
            color: 'text-amber-400'
        },
        {
            id: 'ledger',
            title: 'Merkle Ledger',
            icon: Link,
            desc: 'An immutable blockchain history of every decision made. Uses SHA-256 linking to ensure no thought process can be retroactively altered.',
            color: 'text-slate-300'
        },
        {
            id: 'hscale',
            title: 'H-Scale Validator',
            icon: Zap,
            desc: 'Harmonic Scale based on the Golden Ratio (Phi). It mathematically verifies the "truthfulness" and coherence of a thought before anchoring it.',
            color: 'text-pink-400'
        }
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-lg shadow-2xl flex flex-col max-h-[80vh]">
                {/* Header */}
                <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/50 rounded-t-lg">
                    <h2 className="text-lg font-mono font-bold text-slate-200 flex items-center gap-2">
                        <Zap size={20} className="text-yellow-400" />
                        SYSTEM INNOVATIONS MANIFEST
                    </h2>
                    <button 
                        onClick={onClose}
                        className="text-slate-500 hover:text-white transition-colors p-1"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    {innovations.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="bg-slate-950 border border-slate-800 p-4 rounded hover:border-slate-600 transition-colors group">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`p-2 rounded bg-slate-900 ${item.color} group-hover:bg-slate-800 transition-colors`}>
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="font-bold text-slate-200 font-mono text-sm">{item.title}</h3>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-slate-800 bg-slate-950/50 rounded-b-lg text-center">
                    <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">
                        Genesis v2.0 Architecture Documentation // Confidential
                    </p>
                </div>
            </div>
        </div>
    );
};