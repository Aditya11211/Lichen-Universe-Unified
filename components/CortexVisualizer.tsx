import React from 'react';
import { ProcessStage } from '../types';
import { Eye, Cpu, Scale, BrainCircuit, Gavel } from 'lucide-react';

interface CortexVisualizerProps {
    stage: ProcessStage;
}

export const CortexVisualizer: React.FC<CortexVisualizerProps> = ({ stage }) => {
    const steps = [
        { id: ProcessStage.PERCEPT, icon: Eye, label: 'PERCEPT' },
        { id: ProcessStage.PREDICT, icon: Cpu, label: 'PREDICT' },
        { id: ProcessStage.EVAL, icon: Scale, label: 'EVAL' },
        { id: ProcessStage.REFLECT, icon: BrainCircuit, label: 'REFLECT' },
        { id: ProcessStage.ARBITER, icon: Gavel, label: 'ARBITER' },
    ];

    return (
        <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-4 shadow-lg backdrop-blur-sm">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <BrainCircuit size={16} /> Bifractal Cortex
            </h2>
            
            <div className="flex justify-between items-center relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10 transform -translate-y-1/2"></div>
                
                {steps.map((step) => {
                    const isActive = stage === step.id;
                    const isPast = steps.findIndex(s => s.id === stage) > steps.findIndex(s => s.id === step.id);
                    const Icon = step.icon;
                    
                    let statusColor = "bg-slate-900 border-slate-700 text-slate-600";
                    if (isActive) statusColor = "bg-slate-900 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] scale-110";
                    else if (isPast) statusColor = "bg-slate-900 border-emerald-500/50 text-emerald-500/50";

                    return (
                        <div key={step.id} className="flex flex-col items-center gap-2 transition-all duration-300">
                            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${statusColor}`}>
                                <Icon size={18} />
                            </div>
                            <span className={`text-[10px] font-mono font-bold transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
            
            <div className="mt-6 flex justify-center">
                 <div className={`text-xs font-mono p-2 rounded transition-all duration-500 ${stage !== ProcessStage.IDLE ? 'bg-cyan-950/30 text-cyan-300 border border-cyan-900' : 'text-transparent'}`}>
                    STATUS: {stage === ProcessStage.IDLE ? 'STANDBY' : `EXECUTING ${stage} PROTOCOL...`}
                 </div>
            </div>
        </div>
    );
};