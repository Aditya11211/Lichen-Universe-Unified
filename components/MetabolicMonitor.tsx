import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Battery, BatteryCharging, BatteryWarning, Activity } from 'lucide-react';
import { EconomyState } from '../types';

interface MetabolicMonitorProps {
    economy: EconomyState;
}

export const MetabolicMonitor: React.FC<MetabolicMonitorProps> = ({ economy }) => {
    const percentage = (economy.credits / economy.maxCredits) * 100;
    
    let BatteryIcon = Battery;
    let colorClass = "text-cyan-400";
    let strokeColor = "#22d3ee"; // cyan-400

    if (percentage < 20) {
        BatteryIcon = BatteryWarning;
        colorClass = "text-red-500";
        strokeColor = "#ef4444";
    } else if (percentage > 80) {
        BatteryIcon = BatteryCharging;
        colorClass = "text-emerald-400";
        strokeColor = "#34d399";
    }

    return (
        <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col h-full shadow-lg backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Activity size={16} /> Metabolic Economy
                </h2>
                <span className={`font-mono font-bold ${colorClass}`}>
                    {economy.credits.toFixed(2)} / {economy.maxCredits} CR
                </span>
            </div>

            <div className="flex-grow flex flex-col gap-4">
                {/* Visual Battery Bar */}
                <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden relative border border-slate-700">
                    <div 
                        className={`h-full transition-all duration-500 ease-out ${percentage < 20 ? 'bg-red-500 animate-pulse' : 'bg-cyan-500'}`}
                        style={{ width: `${percentage}%` }}
                    />
                    {/* Grid overlay for "cell" look */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhZWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-20"></div>
                </div>

                {/* History Chart */}
                <div className="flex-grow min-h-[120px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={economy.history}>
                            <defs>
                                <linearGradient id="colorCredits" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={strokeColor} stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor={strokeColor} stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="time" hide />
                            <YAxis domain={[0, 100]} hide />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                                itemStyle={{ color: strokeColor }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke={strokeColor} 
                                fillOpacity={1} 
                                fill="url(#colorCredits)" 
                                isAnimationActive={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-500">
                    <div className="flex justify-between">
                        <span>PERCEPT:</span> <span className="text-slate-300">1.0</span>
                    </div>
                    <div className="flex justify-between">
                        <span>PREDICT:</span> <span className="text-slate-300">2.0</span>
                    </div>
                    <div className="flex justify-between">
                        <span>EVAL:</span> <span className="text-slate-300">1.5</span>
                    </div>
                    <div className="flex justify-between">
                        <span>REFLECT:</span> <span className="text-slate-300">5.0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};