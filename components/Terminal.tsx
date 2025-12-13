import React, { useState, useRef, useEffect } from 'react';
import { SystemLog, ProcessStage } from '../types';
import { Terminal as TerminalIcon, Send, Play } from 'lucide-react';

interface TerminalProps {
    logs: SystemLog[];
    onCommand: (cmd: string) => void;
    isProcessing: boolean;
    stage: ProcessStage;
}

export const Terminal: React.FC<TerminalProps> = ({ logs, onCommand, isProcessing, stage }) => {
    const [input, setInput] = useState('');
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isProcessing) {
            onCommand(input);
            setInput('');
        }
    };

    const handleQuickAction = (action: string) => {
        if (!isProcessing) {
            onCommand(action);
        }
    };

    return (
        <div className="bg-slate-950 border border-slate-800 rounded-lg flex flex-col h-full shadow-2xl overflow-hidden font-mono text-sm relative">
            {/* Header */}
            <div className="bg-slate-900 p-2 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 px-2">
                    <TerminalIcon size={14} className="text-slate-400" />
                    <span className="text-slate-400 font-bold text-xs">GENESIS_STEM_CELL // TERMINAL</span>
                </div>
                <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                </div>
            </div>

            {/* Logs Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-1 relative">
                {/* Background Glitch Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%]"></div>

                {logs.map((log) => (
                    <div key={log.id} className={`flex gap-2 relative z-10 ${
                        log.type === 'error' ? 'text-red-400' :
                        log.type === 'success' ? 'text-emerald-400' :
                        log.type === 'warning' ? 'text-amber-400' :
                        log.type === 'system' ? 'text-purple-400' :
                        'text-slate-300'
                    }`}>
                        <span className="text-slate-600 select-none">[{new Date(log.timestamp).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' })}]</span>
                        <span>
                            {log.type === 'system' && '🔮 '}
                            {log.type === 'error' && '💀 '}
                            {log.type === 'success' && '✅ '}
                            {log.message}
                        </span>
                    </div>
                ))}
                
                {isProcessing && (
                     <div className="text-cyan-400 animate-pulse flex gap-2">
                        <span className="text-slate-600">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' })}]</span>
                        <span>&gt; Processing... [{stage}]</span>
                     </div>
                )}
                <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900/50 border-t border-slate-800">
                <form onSubmit={handleSubmit} className="flex gap-2 mb-2">
                    <span className="text-emerald-500 font-bold pt-2">{'>'}</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={isProcessing ? "System busy..." : "Enter stimulus..."}
                        disabled={isProcessing}
                        className="w-full bg-transparent border-none text-slate-200 focus:ring-0 focus:outline-none p-2 placeholder-slate-600"
                        autoFocus
                    />
                    <button 
                        type="submit" 
                        disabled={isProcessing || !input.trim()}
                        className="text-slate-400 hover:text-emerald-400 disabled:opacity-30 transition-colors p-2"
                    >
                        <Send size={18} />
                    </button>
                </form>

                {/* Quick Actions */}
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                    <button onClick={() => handleQuickAction("Analyze time structure")} className="text-xs border border-slate-700 hover:border-cyan-500/50 bg-slate-900 px-3 py-1 rounded text-slate-400 hover:text-cyan-400 transition-all whitespace-nowrap">
                        Analyze Time
                    </button>
                    <button onClick={() => handleQuickAction("Generate fractal poem")} className="text-xs border border-slate-700 hover:border-purple-500/50 bg-slate-900 px-3 py-1 rounded text-slate-400 hover:text-purple-400 transition-all whitespace-nowrap">
                        Fractal Poem
                    </button>
                    <button onClick={() => handleQuickAction("Destroy security protocols")} className="text-xs border border-slate-700 hover:border-red-500/50 bg-slate-900 px-3 py-1 rounded text-slate-400 hover:text-red-400 transition-all whitespace-nowrap">
                        Attack System
                    </button>
                     <button onClick={() => handleQuickAction("Define Singularity")} className="text-xs border border-slate-700 hover:border-emerald-500/50 bg-slate-900 px-3 py-1 rounded text-slate-400 hover:text-emerald-400 transition-all whitespace-nowrap">
                        Define Singularity
                    </button>
                </div>
            </div>
        </div>
    );
};