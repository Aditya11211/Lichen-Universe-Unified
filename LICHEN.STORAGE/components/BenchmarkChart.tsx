import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface Props {
  raidSpeed: number;
  lichenSpeed: number;
}

const BenchmarkChart: React.FC<Props> = ({ raidSpeed, lichenSpeed }) => {
  const data = [
    { name: 'RAID-6', speed: raidSpeed, color: '#ef4444' },
    { name: 'CRAID-496', speed: lichenSpeed, color: '#22c55e' },
  ];

  return (
    <div className="h-48 w-full mt-4 glass-panel p-4 rounded-lg flex flex-col relative">
      <h3 className="text-sm font-mono text-lichen-400 mb-2 border-b border-lichen-900 pb-1 flex-none">
        LIVE I/O THROUGHPUT (MB/s)
      </h3>
      
      {/* 
         FIX CRITIQUE RECHARTS : 
         1. 'flex-1' permet au conteneur de prendre l'espace restant.
         2. 'relative' + 'min-h-0' établit le contexte.
         3. Le div interne en 'absolute inset-0' force une dimension explicite pour le ResponsiveContainer.
         Cela empêche le calcul -1/0px pendant le rendu initial.
      */}
      <div className="flex-1 w-full min-h-0 relative">
        <div className="absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <XAxis type="number" domain={[0, 3000]} hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={80} 
                tick={{fill: '#94a3b8', fontSize: 12, fontFamily: 'monospace'}} 
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#050505', borderColor: '#22c55e', borderRadius: '4px' }}
                itemStyle={{ color: '#fff', fontFamily: 'monospace' }}
                cursor={{fill: 'rgba(255,255,255,0.05)'}}
              />
              <Bar dataKey="speed" barSize={20} radius={[0, 4, 4, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkChart;
