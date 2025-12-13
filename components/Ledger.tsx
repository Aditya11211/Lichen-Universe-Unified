import React, { useRef, useEffect } from 'react';
import { Block } from '../types';
import { Shield, Link as LinkIcon, Lock } from 'lucide-react';

interface LedgerProps {
    blocks: Block[];
}

export const Ledger: React.FC<LedgerProps> = ({ blocks }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [blocks]);

    return (
        <div className="bg-slate-900/80 border border-slate-700 rounded-lg flex flex-col h-full shadow-lg backdrop-blur-sm overflow-hidden">
             <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <LinkIcon size={16} /> Merkle Ledger
                </h2>
                <div className="flex gap-2">
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded flex items-center gap-1">
                        <Lock size={10} /> IMMUTABLE
                    </span>
                </div>
            </div>
            
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-3 scroll-smooth">
                {blocks.map((block) => (
                    <div key={block.hash} className="relative group">
                        {/* Connecting Line */}
                        {block.index > 0 && (
                            <div className="absolute left-4 -top-4 h-4 w-0.5 bg-slate-700"></div>
                        )}
                        
                        <div className="bg-slate-950 border border-slate-800 rounded p-3 hover:border-purple-500/50 transition-colors">
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-mono text-purple-400">BLOCK #{block.index.toString().padStart(4, '0')}</span>
                                <span className="text-[10px] text-slate-600 font-mono">{new Date(block.timestamp).toLocaleTimeString()}</span>
                            </div>
                            
                            <div className="grid grid-cols-[auto_1fr] gap-2 items-center text-xs font-mono mb-2">
                                <span className="text-slate-600">PREV:</span>
                                <span className="truncate text-slate-500">{block.prev.substring(0, 16)}...</span>
                                
                                <span className="text-slate-600">HASH:</span>
                                <span className="truncate text-emerald-500/80">{block.hash.substring(0, 16)}...</span>
                            </div>

                            <div className="bg-slate-900/50 p-2 rounded border border-slate-800/50">
                                <code className="text-xs text-slate-300 break-all">
                                    {block.data}
                                </code>
                            </div>

                            <div className="mt-2 flex justify-end">
                                <Shield size={12} className="text-slate-600" />
                            </div>
                        </div>
                    </div>
                ))}
                {blocks.length === 0 && (
                    <div className="text-center text-slate-600 text-xs italic py-10">
                        Ledger initialized. Waiting for genesis block...
                    </div>
                )}
            </div>
        </div>
    );
};